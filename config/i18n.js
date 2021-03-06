import en from '../lang/en'
import ru from '../lang/ru'
import uz from '../lang/uz'

export let i18n = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      label: '๐ฌ๐ง English',
      flag: '๐ฌ๐ง'
    },
    {
      code: 'ru',
      iso: 'ru-Ru',
      label: '๐ท๐บ ะ ัััะบะธะน',
      flag: '๐ท๐บ'
    },
    {
      code: 'uz',
      iso: 'uz-UZ',
      label: '๐บ๐ฟ O\'zbek',
      flag: '๐บ๐ฟ'
    }
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ru, uz }
  },
  strategy: 'no_prefix'
}
