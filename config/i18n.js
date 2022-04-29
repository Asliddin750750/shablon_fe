import en from '../lang/en'
import ru from '../lang/ru'
import uz from '../lang/uz'

export let i18n = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      label: '🇬🇧 English',
      flag: '🇬🇧'
    },
    {
      code: 'ru',
      iso: 'ru-Ru',
      label: '🇷🇺 Русский',
      flag: '🇷🇺'
    },
    {
      code: 'uz',
      iso: 'uz-UZ',
      label: '🇺🇿 O\'zbek',
      flag: '🇺🇿'
    }
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ru, uz }
  },
  strategy: 'no_prefix'
}
