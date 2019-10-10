const tuple = <T extends string[]>(...args: T) => args;

// eslint-disable-next-line import/prefer-default-export
export const PresetColorTypes = tuple(
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
);

export type PresetColorType = (typeof PresetColorTypes)[number];
