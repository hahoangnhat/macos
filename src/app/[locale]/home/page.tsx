'use client'
import { AppleIcon } from '@/components'
import { useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations()
  return (
    <div>
      <h1>{t('common.hello')}</h1>
      <AppleIcon />
    </div>
  )
}

export default Home
