import React from 'react';
import { LanguageContext } from '../TranslateProvider/TranslateProvider';
import { extractFromUrl } from '../utils/language';
const TranslateConnect = (Component) => {
    return (props) => {
        const selectLanguage = (value) => {
            try {
                const currentLanguage = extractFromUrl(Object.keys(value.translations), value.defaultLang);
                return (value.translations[currentLanguage] ||
                    value.translations[value.defaultLang] ||
                    value.translations[0]);
            }
            catch (error) {
                return '';
            }
        };
        return (React.createElement(LanguageContext.Consumer, null, (value) => React.createElement(Component, Object.assign({}, props, { translation: selectLanguage(value) }))));
    };
};
export default TranslateConnect;
//# sourceMappingURL=TranslateConnect.js.map