import { PATH } from '@/constants'
import usePathNavigation from '@/hooks/usePathNavigation'
import { CircleUserRound, IdCard, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Layout from '../layout'
import { memo } from 'react'

const AppleAccount = () => {
  const t = useTranslations()

  const { currentPath, navigate, back, forward, canGoBack, canGoForward } = usePathNavigation({
    historyInit: PATH.APPLE_ACCOUNT,
  })

  return (
    <Layout
      sectionName={t('user.label.apple_account')}
      back={canGoBack ? back : undefined}
      forward={canGoForward ? forward : undefined}
    >
      {currentPath === PATH.APPLE_ACCOUNT && (
        <>
          <div className="flex flex-col items-center justify-center py-5">
            <CircleUserRound className="h-20 w-20" />
            <div className="font-bold">{t('user.label.full_name')}</div>
            <div className="text-sm">{t('user.label.email')}</div>
          </div>

          <div
            className="border-alabaster-300/30 bg-alabaster-200/25 flex cursor-pointer items-center justify-between rounded-sm border p-2"
            onClick={() => navigate(PATH.APPLE_ACCOUNT_USER)}
          >
            <div className="flex items-center gap-2">
              <IdCard />
              <div className="text-sm">{t('user.label.personal_information')}</div>
            </div>
            <ChevronRight className="text-alabaster-400 h-4 w-4" />
          </div>
        </>
      )}

      {currentPath === PATH.APPLE_ACCOUNT_USER && (
        <div className="border-alabaster-300/30 bg-alabaster-200/25 mt-4 flex flex-col gap-2 rounded-sm border p-2">
          <div className="flex cursor-pointer items-center justify-between text-xs">
            <div>{t('user.label.name')}</div>
            <div className="text-alabaster-400 flex items-center gap-2">
              <div>{t('user.label.full_name')}</div>
              <ChevronRight className="text-alabaster-400 h-4 w-4" />
            </div>
          </div>

          <div className="bg-alabaster-300/30 h-px w-full"></div>

          <div className="flex cursor-pointer items-center justify-between text-xs">
            <div>{t('user.label.date_of_birth')}</div>
            <div className="text-alabaster-400 mr-2">{t('user.label.birth_date')}</div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default memo(AppleAccount)
