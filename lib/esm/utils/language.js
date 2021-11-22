export const extractFromUrl = (Languages, defaultLang) => {
    try {
        let language = window.location.href.split('/').find((p) => p.length === 2);
        const match = Languages.find((l) => l === language);
        if (match) {
            return match;
        }
        language = returnDefault(Languages, defaultLang);
        return language;
    }
    catch (err) {
        return returnDefault(Languages, defaultLang);
    }
};
const returnDefault = (Languages, defaultLang) => {
    return Languages.find((l) => l === defaultLang) || Languages[0];
};
export const changeUrlLanguage = (code) => {
    return `${window.location.origin}/${code}/${window.location.pathname
        .replace(/\/[a-z]{2}\//g, '')
        .replace(/^\/|\/$/g, '')}`;
};
export const createPath = (languages, path) => {
    return `/:lng(${languages.join('|')})?${path}`;
};
//# sourceMappingURL=language.js.map