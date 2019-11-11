import React, { FC, useState, useEffect, useRef, Component } from 'react';
import { withNaming } from '@bem-react/classname';
import cs from 'classnames';
import './Richtext.scss';
import 'trix/dist/trix.css';
import 'trix/dist/trix';

const cn = withNaming({ e: '__', m: '--' })('Richtext');

interface IRichtext {
  label?: string;
  value?: any;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  error?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  submitted?: boolean;
}

class Richtext extends Component<IRichtext, { touched: boolean }> {
  trixRef: any;

  constructor(props: IRichtext) {
    super(props);
    this.state = {
      touched: false,
    };
  }

  componentDidMount() {
    const { onFocus, onBlur } = this.props;
    const { touched } = this.state;
    this.trixRef.addEventListener('trix-change', this.changed);
    this.trixRef.addEventListener('trix-attachment-add', (event: any) => {
      if (event.attachment.file) {
        this.uploadFileAttachment(event.attachment);
      }
    });
    this.trixRef.addEventListener('trix-focus', (event: any) => onFocus && onFocus(event));
    this.trixRef.addEventListener('trix-blur', (event: any) => {
      var document = this.trixRef.editor.getDocument();
      onBlur && onBlur(document.toString());
      if (!touched) {
        this.setState({ touched: true });
      }
    });
  }

  changed = (e: any) => this.props.onChange && this.props.onChange(e.target.innerHTML);

  componentWillUnmount() {
    const { onFocus, onBlur } = this.props;
    const { touched } = this.state;
    this.trixRef.removeEventListener('trix-changed', this.changed);
    this.trixRef.removeEventListener('trix-attachment-add', (event: any) => {
      if (event.attachment.file) {
        this.uploadFileAttachment(event.attachment);
      }
    });
    this.trixRef.removeEventListener('trix-focus', (event: any) => onFocus && onFocus(event));
    this.trixRef.removeEventListener('trix-blur', (event: any) => {
      var document = this.trixRef.editor.getDocument();
      onBlur && onBlur(document.toString());
      if (!touched) {
        this.setState({ touched: true });
      }
    });
  }

  uploadFileAttachment = (attachment: any) => {
    this.uploadFile(attachment.file, setProgress, setAttributes);

    function setProgress(progress: any) {
      attachment.setUploadProgress(progress);
    }

    function setAttributes(attributes: any) {
      attachment.setAttributes(attributes);
    }
  };

  loadJSON = (data: string) => {
    return this.trixRef.editor.loadJSON(JSON.parse(data));
  };

  returnJSON = () => {
    return JSON.stringify(this.trixRef.editor);
  };

  uploadFile = (file: any, progressCallback: any, successCallback: any) => {
    const date = new Date();
    const key = date.getTime() + '-' + file.name;

    const formData = this.createFormData(file, key);
    const xhr = new XMLHttpRequest();
    const HOST = process.env.REACT_APP_API_URL || 'http://localhost/api/v1/file-upload';
    const cdn = process.env.REACT_APP_CDN_NAME || 'https://dev-assets.qeemtee.com';
    xhr.open('POST', HOST, true);

    xhr.upload.addEventListener('progress', function(event) {
      const progress = (event.loaded / event.total) * 100;
      progressCallback(progress);
    });

    xhr.addEventListener('load', function(event) {
      if (xhr.status == 200) {
        const attributes = {
          url: `${cdn}/${key}`,
          href: `${cdn}/${key}'?content-disposition=attachment`,
        };
        successCallback(attributes);
      }
    });

    xhr.send(formData);
  };

  createFormData(file: File, key: string) {
    const data = new FormData();
    data.append('file', file, key);
    return data;
  }

  render() {
    const { className, error, submitted, label, placeholder } = this.props;
    const { touched } = this.state;
    return (
      <div className={cs(className, cn('', { error: (error && touched) || (submitted && error) }))}>
        {label && <label className={cn('label')}>{label}</label>}
        <input id="rich-trix" type="hidden" name="content" />
        <trix-editor
          placeholder={placeholder}
          class="trix-content"
          ref={(r: any) => (this.trixRef = r)}
          input="rich-trix"
        />
        {(error && touched) || (submitted && error) ? (
          <p className={cn('error-message')}>{error}</p>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Richtext;
