import React, { FC, ReactNode } from 'react';

import { ContextProps, ITranslateProvider } from '../interfaces';

export const LanguageContext = React.createContext<ContextProps>({
  translations: {},
  defaultLang: '',
});

const TranslateProvider: FC<ITranslateProvider> = ({ children, languageStore }) => {
  return (
    <LanguageContext.Provider
      value={{
        translations: languageStore.resource,
        defaultLang: languageStore.defaultLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default TranslateProvider;
