import { StoreProvider } from '@/providers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import React from 'react'

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
