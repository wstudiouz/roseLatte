import en from "../../../public/locales/en.json";
import cz from "../../../public/locales/cz.json";

const translate = (keyName: string, lang: string) => {
  try {
    const translations: any = {
      en,
      cz,
    };
    const translationKeys = keyName.split(".");

    let translation = translations[lang];
    for (const key of translationKeys) {
      translation = translation[key];
      if (!translation) {
        return keyName;
      }
    }

    return translation;
  } catch {
    return keyName;
  }
};

export default translate;
