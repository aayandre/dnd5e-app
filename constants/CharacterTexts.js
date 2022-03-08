import { Platform } from "react-native";
import { getAndroidLocale, getIOSLocale } from "../utils/GetDeviceLocale";

const texts = {
  "pt-br": {
    name: "Nome",
    level: "Level",
    className: "Classe",
    subClassName: "Sub-Classe",
    creationDate: "Data de Cria$ccedil;&atilde;o",
    updateDate: "Data de Atualiza$ccedil;&atilde;o",
  },
  "en-us": {
    name: "Name",
    level: "Level",
    className: "Class",
    subClassName: "Sub-Class",
    creationDate: "Creation Date",
    updateDate: "Update Date",
  },
};

function searchLocaleInTexts(locale) {
  let localeApp = texts["en-us"];
  for (const textsLocale in texts) {
    if (Object.hasOwnProperty.call(texts, textsLocale)) {
      if (String(textsLocale).toLowerCase() == String(locale).toLowerCase()) {
        localeApp = texts[textsLocale];
      }
    }
  }
  return localeApp;
}

export default () => {
  let locale = "en-us";
  if (localStorage.getItem("locale")) {
    return searchLocaleInTexts(localStorage.getItem("locale"));
  }

  if (Platform.OS === "ios") {
    locale = getIOSLocale();
  } else if (Platform.OS === "android") {
    locale = getAndroidLocale();
  }

  return searchLocaleInTexts(locale);
};
