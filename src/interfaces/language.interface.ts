import { ReactNode } from 'react';

export interface ContextProps {
  translations: any;
  defaultLang: string;
}

export interface ILanguageStore {
  resource: any;
  defaultLang: string;
}

export interface ITranslateConnect {
  translation: any;
}

export interface ITranslateProvider {
  children: ReactNode;
  languageStore: ILanguageStore;
}
