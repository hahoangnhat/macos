import { Formats, TranslationValues } from 'next-intl'

export type TTFunction = (
  key: string,
  values?: TranslationValues,
  formats?: Partial<Formats>,
) => string
