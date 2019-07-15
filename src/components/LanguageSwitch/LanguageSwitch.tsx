import React, { Fragment, useContext } from 'react';
import './LanguageSwitch.scss';
import { extractFromUrl, changeUrlLanguage } from 'utils/language';
import languageMapping from './languageMapping';
import { withNaming } from '@bem-react/classname';
import { LanguageContext } from 'components/TranslateProvider/TranslateProvider';
const cn = withNaming({ e: '__', m: '--' })('LanguageSwitch');

const LanguageSwitch = () => {
  const value = useContext(LanguageContext);
  const language: string= extractFromUrl(
    Object.keys(value.translations),
    value.defaultLang
  );
  function handleClose(code: string | false = false) {
    if (code && language && code !== language) {
      window.location.replace(changeUrlLanguage(code));
    }
  }

  const getClassName = (ln: string) => {
    if (ln === language) {
      return cn('active');
    }
    return '';
  };

  return (
    <div className={cn()}>
      {Object.keys(value.translations).map((l, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && <span>/</span>}
            <span
              className={getClassName(l)}
              onClick={() => {
                handleClose(l);
              }}
            >
              {languageMapping[l]}
            </span>
          </Fragment>
        );
      })}
    </div>
  );
};

export default LanguageSwitch;
