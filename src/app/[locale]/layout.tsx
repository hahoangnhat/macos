import { StoreProvider } from '@/providers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import React from 'react'
import Image from 'next/image'
import desktopBackground from '@/assets/images/desktop-background.jpg'

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <Image
          src={desktopBackground}
          alt="Desktop background"
          className="absolute top-0 left-0 h-full w-full object-cover"
          priority
        />
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
