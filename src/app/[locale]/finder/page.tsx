'use client'
import { AppleIcon } from '@/components'
import { useAppSelector } from '@/stores/hooks'
import { useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations()
  const count = useAppSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{t('common.hello')}</h1>
      <AppleIcon />
      {count}
    </div>
  )
}

export default Home
