import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptTranslation from './translations/pt.json';
import enTranslation from './translations/en.json';
import esTranslation from './translations/es.json';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enTranslation,
		},
		pt: {
			translation: ptTranslation,
		},
		es: {
			translation: esTranslation,
		},
	},
	lng: 'pt',
	fallbackLng: 'pt',
	interpolation: {
		escapeValue: false,
	},
});
