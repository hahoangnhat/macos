import { useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations()
  return <h1>{t('common.hello')}</h1>
}

export default Home
