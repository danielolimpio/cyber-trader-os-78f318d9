import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import it from './locales/it.json';
import ko from './locales/ko.json';
import th from './locales/th.json';
import vi from './locales/vi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
      de: { translation: de },
      ru: { translation: ru },
      it: { translation: it },
      ko: { translation: ko },
      th: { translation: th },
      vi: { translation: vi },
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
