import React, { FC, useState, useEffect, useRef, Component } from 'react';
import { withNaming } from '@bem-react/classname';
import cs from 'classnames';
import './Richtext.scss';
import 'trix/dist/trix.css';
import 'trix/dist/trix';
import { IRichtext } from 'interfaces';

const cn = withNaming({ e: '__', m: '--' })('Richtext');

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
      onBlur && onBlur(event);
      if (!touched) {
        this.setState({ touched: true });
      }
    });
  }

  changed = (e: any) => this.props.onChange && this.props.onChange(this.trixRef.value);

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
      onBlur && onBlur(event);
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
    console.log(process.env);
    const url = `${process.env.REACT_APP_API_URL || 'http://localhost/api/v1'}/file-upload`;
    const cdn = process.env.REACT_APP_CDN_NAME || 'https://dev-assets.qeemtee.com';
    xhr.open('POST', url, true);

    xhr.upload.addEventListener('progress', function(event) {
      const progress = (event.loaded / event.total) * 100;
      progressCallback(progress);
    });

    xhr.addEventListener('load', function(event) {
      if (xhr.status == 200) {
        const response = JSON.parse(xhr.response);

        const attributes = {
          url: response.result.file,
          href: `${response.result.file}?content-disposition=attachment`,
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
    const { className, error, submitted, label, placeholder, value } = this.props;
    const { touched } = this.state;
    const id = Math.random()
      .toString(36)
      .substr(2, 9);
    return (
      <div className={cs(className, cn('', { error: (error && touched) || (submitted && error) }))}>
        {label && <label className={cn('label')}>{label}</label>}
        <input value={value} id={id} type="hidden" name="content" />
        <trix-editor
          placeholder={placeholder}
          class="trix-content"
          ref={(r: any) => (this.trixRef = r)}
          input={id}
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

export const RichTextDisplay = ({ data }: { data: string | null }) => {
  return <div className="trix-content" dangerouslySetInnerHTML={{ __html: data! }} />;
};
