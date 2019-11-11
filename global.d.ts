declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

interface Document {
  onmousewheel?: any;
}

declare module '*.svg';
declare module 'rc-util/lib/Dom/addEventListener';
declare module 'rc-util/lib/warning';
declare module 'rc-calendar/lib/MonthCalendar';
declare module 'rc-calendar/lib/Picker';
declare module 'rc-time-picker/lib/TimePicker';
declare module 'rc-calendar/lib/RangeCalendar';
declare module 'react-lifecycles-compat';
declare module 'rc-time-picker/lib/Panel';
declare module 'react-phone-number-input';
declare module 'rc-notification';
declare module 'rc-collapse';
declare module 'shallowequal';
declare module 'trix';
declare namespace JSX {
  interface IntrinsicElements {
    'trix-editor': any;
  }
}
