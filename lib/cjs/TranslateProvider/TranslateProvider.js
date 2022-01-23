import React from 'react';
export const LanguageContext = React.createContext({
    translations: {},
    defaultLang: '',
});
const TranslateProvider = ({ children, languageStore }) => {
    return (React.createElement(LanguageContext.Provider, { value: {
            translations: languageStore.resource,
            defaultLang: languageStore.defaultLang,
        } }, children));
};
export default TranslateProvider;
//# sourceMappingURL=TranslateProvider.js.map