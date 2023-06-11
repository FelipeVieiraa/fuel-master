import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import z from 'zod';
import { zodI18nMap } from 'zod-i18n-map';
import enZodTranslation from 'zod-i18n-map/locales/en/zod.json';
import esZodTranslation from 'zod-i18n-map/locales/es/zod.json';
import ptZodTranslation from 'zod-i18n-map/locales/pt/zod.json';

import enTranslation from './translations/en.json';
import esTranslation from './translations/es.json';
import ptTranslation from './translations/pt.json';

z.setErrorMap(zodI18nMap);

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enTranslation,
			zod: enZodTranslation,
		},
		pt: {
			translation: ptTranslation,
			zod: ptZodTranslation,
		},
		es: {
			translation: esTranslation,
			zod: esZodTranslation,
		},
	},
	lng: 'pt',
	fallbackLng: 'pt',
	interpolation: {
		escapeValue: false,
	},
});
