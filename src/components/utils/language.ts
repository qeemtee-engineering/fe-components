declare const window: any;
export const extractFromUrl = (Languages: string[], defaultLang: string) => {
  try {
    let language = window.location.href
      .split('/')
      .find((p: any) => p.length === 2);
    const match = Languages.find(l => l === language);
    if (match) {
      return match;
    }
    language = returnDefault(Languages, defaultLang);
    return language;
  } catch (err) {
    return returnDefault(Languages, defaultLang);
  }
};

const returnDefault = (Languages: string[], defaultLang: string) => {
  return Languages.find(l => l === defaultLang) || Languages[0];
};

export const changeUrlLanguage = (code: string) => {
  return `${window.location.origin}/${code}/${window.location.pathname
    .replace(/\/[a-z]{2}\//g, '')
    .replace(/^\/|\/$/g, '')}`;
};

export const createPath = (languages: string[], path: string) => {
  return `/:lng(${languages.join('|')})?${path}`;
};
