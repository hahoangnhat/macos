import { Header } from '@/components'
import { IDropdownOptionProps } from '@/interfaces'
import { useTranslations } from 'next-intl'

const FinderLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations()

  const utils: IDropdownOptionProps[] = [
    {
      id: 1,
      label: t('finder.header.app_name'),
      isAppName: true,
    },
    {
      id: 2,
      label: t('finder.header.utils.file'),
    },
    {
      id: 3,
      label: t('finder.header.utils.edit'),
    },
    {
      id: 4,
      label: t('finder.header.utils.view'),
    },
    {
      id: 5,
      label: t('finder.header.utils.go'),
    },
    {
      id: 6,
      label: t('finder.header.utils.window'),
    },
    {
      id: 7,
      label: t('finder.header.utils.help'),
    },
  ]

  return (
    <>
      <Header utils={utils} />
      {children}
    </>
  )
}

export default FinderLayout
