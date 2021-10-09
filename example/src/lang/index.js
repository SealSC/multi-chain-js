import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "./en";
import zhLocale from "./zh";
import LocalStore from './localStorage';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  },
};

const i18n = new VueI18n({
  locale: "en",
  // locale: LocalStore.GetLang('language') || "en",
  messages,
  silentTranslationWarn: true
});

export default i18n;
