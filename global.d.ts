declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

interface Document {
  onmousewheel?: any;
}

declare module '*.svg';
declare module 'rc-util/lib/Dom/addEventListener';
declare module 'react-phone-number-input';
declare module 'rc-notification';
