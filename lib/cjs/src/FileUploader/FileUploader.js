import { withNaming } from '@bem-react/classname';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import { newId } from '../utils';
import './FileUploader.css';
const url = `${process.env.REACT_APP_API_URL || 'http://localhost/api/v1'}/file-upload`;
const cn = withNaming({ e: '__', m: '--' })('FileUploader');
const FileUploader = (props) => {
    const [id, setId] = useState('');
    const fileWrapper = useRef(null);
    const progressBar = useRef(null);
    const [files, setFiles] = useState([]);
    let uploadProgress = [];
    useEffect(() => {
        if (fileWrapper) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
                fileWrapper.current.addEventListener(eventName, preventDefaults, false);
                document.body.addEventListener(eventName, preventDefaults, false);
            });
            ['dragenter', 'dragover'].forEach((eventName) => {
                fileWrapper.current.addEventListener(eventName, highlight, false);
            });
            ['dragleave', 'drop'].forEach((eventName) => {
                fileWrapper.current.addEventListener(eventName, unhighlight, false);
            });
            fileWrapper.current.addEventListener('drop', handleDrop, false);
            return () => {
                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
                    fileWrapper.current.removeEventListener(eventName, preventDefaults, false);
                    document.body.removeEventListener(eventName, preventDefaults, false);
                });
                ['dragenter', 'dragover'].forEach((eventName) => {
                    fileWrapper.current.removeEventListener(eventName, highlight, false);
                });
                ['dragleave', 'drop'].forEach((eventName) => {
                    fileWrapper.current.removeEventListener(eventName, unhighlight, false);
                });
                fileWrapper.current.removeEventListener('drop', handleDrop, false);
            };
        }
    }, [fileWrapper.current]);
    useEffect(() => {
        setId(newId('File-Uploader-'));
    }, []);
    useEffect(() => {
        if (files.length) {
            initializeProgress(files.length);
            Promise.all(files.map(uploadFile)).then((data) => {
                sendFile(data);
                setFiles([]);
            });
        }
    }, [files]);
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    function highlight(e) {
        fileWrapper.current.classList.add('highlight');
    }
    function unhighlight(e) {
        fileWrapper.current.classList.remove('active');
    }
    function onChange(e) {
        const newFiles = fileListToArray(e.target.files);
        setFiles(newFiles);
    }
    function handleDrop(e) {
        e.preventDefault();
        if (e.dataTransfer) {
            const newFiles = fileListToArray(e.dataTransfer.files);
            setFiles(props.multiple ? [...newFiles] : [newFiles[0]]);
        }
    }
    function fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }
    function initializeProgress(numFiles) {
        progressBar.current.value = 0;
        uploadProgress = [];
        for (let i = numFiles; i > 0; i--) {
            uploadProgress.push(0);
        }
    }
    function updateProgress(fileNumber, percent) {
        uploadProgress[fileNumber] = percent;
        let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length;
        progressBar.current.value = total;
    }
    function uploadFile(file, i) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            const date = new Date();
            const key = `${date.getTime()}-${file.name}`.replace(/ /g, '');
            const formData = createFormData(file, key);
            xhr.open('POST', url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.upload.addEventListener('progress', function (e) {
                updateProgress(i, (e.loaded * 100.0) / e.total || 100);
            });
            xhr.addEventListener('readystatechange', function (e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve({
                        mediaType: file.type,
                        mediaUrl: JSON.parse(xhr.response).result.file,
                        name: file.name,
                    });
                    updateProgress(i, 100);
                }
                else if (xhr.readyState == 4 && xhr.status != 200) {
                    reject('error');
                }
            });
            xhr.send(formData);
        });
    }
    function createFormData(file, key) {
        const data = new FormData();
        data.append('file', file, key);
        return data;
    }
    const removeFile = (i) => (e) => {
        const { value } = props;
        if (value) {
            value.splice(i, 1);
            props.onChange && props.onChange([...value]);
        }
    };
    const sendFile = (data) => {
        const { value } = props;
        if (props.onChange) {
            let files = [...(value || []), ...data];
            if (!props.multiple) {
                return props.onChange([files[0]]);
            }
            props.onChange(files);
        }
    };
    return (React.createElement("div", { className: cn('', { error: props.error ? true : false }), ref: fileWrapper },
        React.createElement("div", { className: cn('form') },
            React.createElement("label", { className: cn('button'), htmlFor: id }, "Select Files"),
            React.createElement("input", { hidden: true, id: id, onChange: onChange, type: "file", multiple: props.multiple })),
        React.createElement("progress", { className: cn('progress'), ref: progressBar, max: 100, value: 0 }),
        props.value && props.value.length ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: cn('uploaded') }, props.value.map((u, i) => u.mediaType.includes('image') && (React.createElement("div", { key: i, className: cn('uploaded__wrapper') },
                React.createElement("img", { src: u.mediaUrl, alt: "media" }),
                React.createElement(Icon, { onClick: removeFile(i), icon: "close" }))))),
            React.createElement("div", { className: cn('uploaded') }, props.value.map((u, i) => !u.mediaType.includes('image') && (React.createElement("div", { key: i, className: cn('uploaded__wrapper') },
                React.createElement("p", null, u.name ? u.name : u.mediaUrl.split('/')[u.mediaUrl.split('/').length - 1]),
                React.createElement(Icon, { onClick: removeFile(i), icon: "close" }))))))) : null,
        props.error ? React.createElement("p", { className: cn('error') }, props.error) : null));
};
FileUploader.defaultProps = {
    multiple: true,
};
export default FileUploader;
//# sourceMappingURL=FileUploader.js.map