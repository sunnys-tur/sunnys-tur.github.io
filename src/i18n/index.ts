import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import type { Dict } from './types';

export const languages = {
  pt: { label: 'Português', short: 'PT', locale: 'pt_BR', path: '/' },
  en: { label: 'English', short: 'EN', locale: 'en_US', path: '/en/' },
  es: { label: 'Español', short: 'ES', locale: 'es_ES', path: '/es/' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

export const getLang = (value?: string): Lang =>
  value && value in languages ? (value as Lang) : defaultLang;

const dictionaries: Record<Lang, Dict> = { en, pt, es };
export const getDict = (lang: Lang): Dict => dictionaries[lang];
export type { Dict };
