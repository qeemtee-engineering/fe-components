import { withNaming } from '@bem-react/classname';
import React, { Fragment, useContext } from 'react';
import { LanguageContext } from '../TranslateProvider/TranslateProvider';
import { changeUrlLanguage, extractFromUrl } from '../utils/language';
import './LanguageSwitch.css';
import languageMapping from './languageMapping';
const cn = withNaming({ e: '__', m: '--' })('LanguageSwitch');
const LanguageSwitch = () => {
    const value = useContext(LanguageContext);
    const language = extractFromUrl(Object.keys(value.translations), value.defaultLang);
    function handleClose(code = false) {
        if (code && language && code !== language) {
            window.location.replace(changeUrlLanguage(code));
        }
    }
    const getClassName = (ln) => {
        if (ln === language) {
            return cn('active');
        }
        return '';
    };
    return (React.createElement("div", { className: cn() }, Object.keys(value.translations).map((l, index) => {
        return (React.createElement(Fragment, { key: index },
            index !== 0 && React.createElement("span", null, "/"),
            React.createElement("span", { className: getClassName(l), onClick: () => {
                    handleClose(l);
                } }, languageMapping[l])));
    })));
};
export default LanguageSwitch;
//# sourceMappingURL=LanguageSwitch.js.map