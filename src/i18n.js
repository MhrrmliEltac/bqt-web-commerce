import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {};

i18n.use(initReactI18next).init({
  lng: "tr",
  resources,
});
