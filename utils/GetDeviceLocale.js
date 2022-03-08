import { NativeModules } from "react-native";

export function getAndroidLocale() {
  try {
    return NativeModules.I18nManager.localeIdentifier;
  } catch (error) {
    console.error(error);
    return "en-us";
  }
}

export function getIOSLocale() {
  try {
    return (
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    );
  } catch (error) {
    console.error(error);
    return "en-us";
  }
}
