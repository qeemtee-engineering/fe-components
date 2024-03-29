import { withNaming } from '@bem-react/classname';
import React, { ChangeEvent, FC, MouseEvent, useEffect, useRef, useState } from 'react';

import Icon from '../Icon';
import { IFileUploader } from '../interfaces';
import { newId } from '../utils';
import './FileUploader.scss';

interface Media {
  mediaUrl: string;
  mediaType: string;
  name?: string;
}

const url = `${process.env.REACT_APP_API_URL || 'http://localhost/api/v1'}/file-upload`;
const cn = withNaming({ e: '__', m: '--' })('FileUploader');

const FileUploader: FC<IFileUploader> = (props) => {
  const [id, setId] = useState('');
  const fileWrapper = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLProgressElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  let uploadProgress: any[] = [];

  useEffect(() => {
    if (fileWrapper) {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        fileWrapper.current!.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
      });

      // Highlight drop area when item is dragged over it
      ['dragenter', 'dragover'].forEach((eventName) => {
        fileWrapper.current!.addEventListener(eventName, highlight, false);
      });
      ['dragleave', 'drop'].forEach((eventName) => {
        fileWrapper.current!.addEventListener(eventName, unhighlight, false);
      });

      fileWrapper.current!.addEventListener('drop', handleDrop, false);

      return () => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
          fileWrapper.current!.removeEventListener(eventName, preventDefaults, false);
          document.body.removeEventListener(eventName, preventDefaults, false);
        });
        ['dragenter', 'dragover'].forEach((eventName) => {
          fileWrapper.current!.removeEventListener(eventName, highlight, false);
        });
        ['dragleave', 'drop'].forEach((eventName) => {
          fileWrapper.current!.removeEventListener(eventName, unhighlight, false);
        });
        fileWrapper.current!.removeEventListener('drop', handleDrop, false);
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

  function preventDefaults(e: { preventDefault: () => void; stopPropagation: () => void }) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(e: any) {
    fileWrapper.current!.classList.add('highlight');
  }

  function unhighlight(e: any) {
    fileWrapper.current!.classList.remove('active');
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const newFiles = fileListToArray(e.target.files!);
    setFiles(newFiles);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    if (e.dataTransfer) {
      const newFiles: File[] = fileListToArray(e.dataTransfer.files);
      setFiles(props.multiple ? [...newFiles] : [newFiles[0]]);
    }
  }

  function fileListToArray(list: FileList): File[] {
    const array: File[] = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i)!);
    }
    return array;
  }

  function initializeProgress(numFiles: number) {
    progressBar.current!.value = 0;
    uploadProgress = [];

    for (let i = numFiles; i > 0; i--) {
      uploadProgress.push(0);
    }
  }

  function updateProgress(fileNumber: string | number, percent: number) {
    uploadProgress[fileNumber] = percent;
    let total: number = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length;
    progressBar.current!.value = total;
  }

  function uploadFile(file: File, i: any) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      const date = new Date();
      const key = `${date.getTime()}-${file.name}`.replace(/ /g, '');
      const formData = createFormData(file, key);
      xhr.open('POST', url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

      // Update progress (can be used to show progress indicator)
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
          updateProgress(i, 100); // <- Add this
        } else if (xhr.readyState == 4 && xhr.status != 200) {
          // Error. Inform the user
          reject('error');
        }
      });

      xhr.send(formData);
    });
  }

  function createFormData(file: File, key: string) {
    const data = new FormData();
    data.append('file', file, key);
    return data;
  }

  const removeFile = (i: number) => (e: MouseEvent<HTMLElement>) => {
    const { value } = props;
    if (value) {
      value.splice(i, 1);
      props.onChange && props.onChange([...value]);
    }
  };

  const sendFile = (data: any) => {
    const { value } = props;
    if (props.onChange) {
      let files = [...(value || []), ...data];
      if (!props.multiple) {
        return props.onChange([files[0]]);
      }
      props.onChange(files);
    }
  };

  return (
    <div className={cn('', { error: props.error ? true : false })} ref={fileWrapper}>
      <div className={cn('form')}>
        <label className={cn('button')} htmlFor={id}>
          Select Files
        </label>
        <input hidden id={id} onChange={onChange} type="file" multiple={props.multiple} />
      </div>
      <progress className={cn('progress')} ref={progressBar} max={100} value={0} />
      {props.value && props.value.length ? (
        <>
          <div className={cn('uploaded')}>
            {props.value!.map(
              (u, i) =>
                u.mediaType.includes('image') && (
                  <div key={i} className={cn('uploaded__wrapper')}>
                    <img src={u.mediaUrl} alt="media" />
                    <Icon onClick={removeFile(i)} icon="close" />
                  </div>
                )
            )}
          </div>
          <div className={cn('uploaded')}>
            {props.value!.map(
              (u, i) =>
                !u.mediaType.includes('image') && (
                  <div key={i} className={cn('uploaded__wrapper')}>
                    <p>
                      {u.name ? u.name : u.mediaUrl.split('/')[u.mediaUrl.split('/').length - 1]}
                    </p>
                    <Icon onClick={removeFile(i)} icon="close" />
                  </div>
                )
            )}
          </div>
        </>
      ) : null}
      {props.error ? <p className={cn('error')}>{props.error}</p> : null}
    </div>
  );
};

FileUploader.defaultProps = {
  multiple: true,
};

export default FileUploader;
