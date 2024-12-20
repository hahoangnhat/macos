import { ELocale } from '@/constants'
import { format } from 'date-fns'
import { enUS, vi } from 'date-fns/locale'

const getCurrentDateTime = (locale: ELocale) => {
  const now = new Date()

  switch (locale) {
    case ELocale.VI:
      return format(now, 'EEE d MMM HH:mm', { locale: vi })
    default:
      return format(now, 'EEE d MMM HH:mm', { locale: enUS })
  }
}

export { getCurrentDateTime }
