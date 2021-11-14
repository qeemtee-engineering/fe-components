import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import cs from 'classnames';
import './Richtext.css';
import 'trix/dist/trix.css';
import 'trix/dist/trix';
const cn = withNaming({ e: '__', m: '--' })('Richtext');
class Richtext extends Component {
    constructor(props) {
        super(props);
        this.changed = (e) => this.props.onChange && this.props.onChange(this.trixRef.value);
        this.uploadFileAttachment = (attachment) => {
            this.uploadFile(attachment.file, setProgress, setAttributes);
            function setProgress(progress) {
                attachment.setUploadProgress(progress);
            }
            function setAttributes(attributes) {
                attachment.setAttributes(attributes);
            }
        };
        this.loadJSON = (data) => {
            return this.trixRef.editor.loadJSON(JSON.parse(data));
        };
        this.returnJSON = () => {
            return JSON.stringify(this.trixRef.editor);
        };
        this.uploadFile = (file, progressCallback, successCallback) => {
            const date = new Date();
            const key = date.getTime() + '-' + file.name;
            const formData = this.createFormData(file, key);
            const xhr = new XMLHttpRequest();
            const url = `${process.env.REACT_APP_API_URL || 'http://localhost/api/v1'}/file-upload`;
            const cdn = process.env.REACT_APP_CDN_NAME || 'https://dev-assets.qeemtee.com';
            xhr.open('POST', url, true);
            xhr.upload.addEventListener('progress', function (event) {
                const progress = (event.loaded / event.total) * 100;
                progressCallback(progress);
            });
            xhr.addEventListener('load', function (event) {
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
        this.state = {
            touched: false,
        };
    }
    componentDidMount() {
        const { onFocus, onBlur } = this.props;
        const { touched } = this.state;
        this.trixRef.addEventListener('trix-change', this.changed);
        this.trixRef.addEventListener('trix-attachment-add', (event) => {
            if (event.attachment.file) {
                this.uploadFileAttachment(event.attachment);
            }
        });
        this.trixRef.addEventListener('trix-focus', (event) => onFocus && onFocus(event));
        this.trixRef.addEventListener('trix-blur', (event) => {
            onBlur && onBlur(event);
            if (!touched) {
                this.setState({ touched: true });
            }
        });
    }
    componentWillUnmount() {
        const { onFocus, onBlur } = this.props;
        const { touched } = this.state;
        this.trixRef.removeEventListener('trix-changed', this.changed);
        this.trixRef.removeEventListener('trix-attachment-add', (event) => {
            if (event.attachment.file) {
                this.uploadFileAttachment(event.attachment);
            }
        });
        this.trixRef.removeEventListener('trix-focus', (event) => onFocus && onFocus(event));
        this.trixRef.removeEventListener('trix-blur', (event) => {
            onBlur && onBlur(event);
            if (!touched) {
                this.setState({ touched: true });
            }
        });
    }
    createFormData(file, key) {
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
        return (React.createElement("div", { className: cs(className, cn('', { error: (error && touched) || (submitted && error) })) },
            label && (React.createElement("label", { className: cn('label') },
                label,
                " ",
                this.props.required && React.createElement("span", { className: cn('required') }, "*"))),
            React.createElement("input", { value: value, id: id, type: "hidden", name: "content" }),
            React.createElement("trix-editor", { placeholder: placeholder, class: "trix-content", ref: (r) => (this.trixRef = r), input: id }),
            (error && touched) || (submitted && error) ? (React.createElement("p", { className: cn('error-message') }, error)) : ('')));
    }
}
export default Richtext;
export const RichTextDisplay = ({ data }) => {
    return React.createElement("div", { className: "trix-content", dangerouslySetInnerHTML: { __html: data } });
};
//# sourceMappingURL=Richtext.js.map