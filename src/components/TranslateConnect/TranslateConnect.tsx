import React from 'react';
import { LanguageContext } from '../TranslateProvider/TranslateProvider';
import { extractFromUrl } from '../utils';
import { ContextProps, ITranslateConnect } from 'interfaces';

const TranslateConnect = <P extends ITranslateConnect>(
  Component: React.ComponentType<P>
) => {
  return (props: Pick<P, Exclude<keyof P, 'translation'>>) => {
    const selectLanguage = (value: ContextProps) => {
      try {
        const currentLanguage: string = extractFromUrl(
          Object.keys(value.translations),
          value.defaultLang
        );
        return (
          value.translations![currentLanguage] ||
          value.translations![value.defaultLang] ||
          value.translations[0]
        );
      } catch (error) {
        return '';
      }
    };
    return (
      <LanguageContext.Consumer>
        {value => (
          <Component translation={selectLanguage(value)} {...props as P} />
        )}
      </LanguageContext.Consumer>
    );
  };
};

export default TranslateConnect;
