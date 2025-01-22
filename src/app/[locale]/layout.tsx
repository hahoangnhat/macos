import { StoreProvider } from '@/providers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import React from 'react'
import { JetBrains_Mono } from 'next/font/google'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
})

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={jetBrainsMono.variable}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
