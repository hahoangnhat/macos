import { Header } from '@/components'
import { finderUtils } from '@/constants'
import { useTranslations } from 'next-intl'

const FinderLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations()

  return (
    <>
      <Header utils={finderUtils(t)} />
      {children}
    </>
  )
}

export default FinderLayout
