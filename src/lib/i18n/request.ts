import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { ELocale } from '@/constants'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as ELocale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: {
      common: (await import(`@/locales/${locale}/common.json`)).default,
    },
  }
})
