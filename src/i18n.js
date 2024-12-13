import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './path-to-your-translations'; // Import your translations

i18n
  .use(initReactI18next) // Connect with React
  .init({
    resources,
    lng: 'pt', // Set Portuguese as the default language
    fallbackLng: 'en', // Fallback to English if translations are missing
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });

export default i18n;
