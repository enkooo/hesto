import en from './i18n/en'
import pl from './i18n/pl'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pl',
  messages: {
    en,
    pl,
  },
}))
