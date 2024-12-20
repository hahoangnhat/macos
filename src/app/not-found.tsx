import { useTranslations } from 'next-intl'

const NotFound = () => {
  const t = useTranslations()
  return (
    <html>
      <body>
        <div className="flex h-full w-full items-center justify-center gap-1">
          <span>404</span>
          <span>|</span>
          <span>{t('error.404_not_found')}</span>
        </div>
      </body>
    </html>
  )
}

export default NotFound
