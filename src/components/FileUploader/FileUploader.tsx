import React, {
  useRef,
  FC,
  useEffect,
  useState,
  ChangeEvent,
  MouseEvent,
  useLayoutEffect,
} from 'react';
import './FileUploader.scss';
import { withNaming } from '@bem-react/classname';
import Icon from '../Icon';
import { IFileUploader } from 'interfaces';

const cdn = process.env.REACT_APP_CDN_NAME || 'https://dev-assets.qeemtee.com';
const url = `${process.env.REACT_APP_API_URL || 'http://localhost/api/v1'}/file-upload`;
const cn = withNaming({ e: '__', m: '--' })('FileUploader');

const FileUploader: FC<IFileUploader> = props => {
  const fileWrapper = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLProgressElement>(null);
  let uploadProgress: any[] = [];
  const [files, setFiles] = useState<File[]>([]);
  const [uploaded, setUploaded] = useState<
    { mediaUrl: string; mediaType: string; name?: string }[]
  >([]);

  useEffect(() => {
    if (fileWrapper) {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileWrapper.current!.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
      });

      // Highlight drop area when item is dragged over it
      ['dragenter', 'dragover'].forEach(eventName => {
        fileWrapper.current!.addEventListener(eventName, highlight, false);
      });
      ['dragleave', 'drop'].forEach(eventName => {
        fileWrapper.current!.addEventListener(eventName, unhighlight, false);
      });

      fileWrapper.current!.addEventListener('drop', handleDrop, false);

      return () => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
          fileWrapper.current!.removeEventListener(eventName, preventDefaults, false);
          document.body.removeEventListener(eventName, preventDefaults, false);
        });
        ['dragenter', 'dragover'].forEach(eventName => {
          fileWrapper.current!.removeEventListener(eventName, highlight, false);
        });
        ['dragleave', 'drop'].forEach(eventName => {
          fileWrapper.current!.removeEventListener(eventName, unhighlight, false);
        });
        fileWrapper.current!.removeEventListener('drop', handleDrop, false);
      };
    }
  }, [fileWrapper.current]);

  useEffect(() => {
    props.onUpload && props.onUpload(uploaded);
  }, [uploaded]);

  useEffect(() => {
    if (
      props.defaultValue &&
      props.defaultValue.length &&
      JSON.stringify(props.defaultValue) !== JSON.stringify(uploaded)
    ) {
      setUploaded([...props.defaultValue!]);
    }
  }, [props.defaultValue]);

  useEffect(() => {
    initializeProgress(files.length);
    files.forEach(uploadFile);
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
    var xhr = new XMLHttpRequest();
    const date = new Date();
    const key = `${date.getTime()}-${file.name}`.replace(/ /g, '');
    const formData = createFormData(file, key);
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener('progress', function(e) {
      updateProgress(i, (e.loaded * 100.0) / e.total || 100);
    });

    xhr.addEventListener('readystatechange', function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (props.multiple) {
          setUploaded(f => [
            ...f,
            {
              mediaType: file.type,
              mediaUrl: JSON.parse(xhr.response).result.file,
              name: file.name,
            },
          ]);
        } else {
          setUploaded([
            {
              mediaType: file.type,
              mediaUrl: JSON.parse(xhr.response).result.file,
              name: file.name,
            },
          ]);
        }
        updateProgress(i, 100); // <- Add this
      } else if (xhr.readyState == 4 && xhr.status != 200) {
        // Error. Inform the user
      }
    });

    xhr.send(formData);
  }

  function createFormData(file: File, key: string) {
    const data = new FormData();
    data.append('file', file, key);
    return data;
  }

  const removeFile = (i: number) => (e: MouseEvent<HTMLElement>) => {
    setUploaded(u => {
      u.splice(i, 1);
      return [...u];
    });
  };

  return (
    <div className={cn()} ref={fileWrapper}>
      <form className={cn('form')}>
        <label className={cn('button')} htmlFor="FileUploader">
          Select Files
        </label>
        <input hidden id="FileUploader" onChange={onChange} type="file" multiple={props.multiple} />
      </form>
      <progress className={cn('progress')} ref={progressBar} max={100} value={0} />
      {uploaded.length ? (
        <>
          <div className={cn('uploaded')}>
            {uploaded.map(
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
            {uploaded.map(
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
    </div>
  );
};

FileUploader.defaultProps = {
  multiple: true,
};

export default FileUploader;
