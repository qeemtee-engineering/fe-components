declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

interface Document {
  onmousewheel?: any;
}

declare module '*.svg';
declare module 'rc-util/lib/Dom/addEventListener';
