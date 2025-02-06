'use client'
import { Header } from '@/components'
import { EApplication, generateFinderUtils } from '@/constants'
import { openApplication, setApplicationUtils } from '@/stores/applications/slice'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo } from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations()
  const dispatch = useAppDispatch()
  const applicationUtils = useAppSelector((state) => state.application.applicationUtils)

  const finderUtils = useMemo(() => generateFinderUtils(t), [t])

  useEffect(() => {
    // Set default open application
    dispatch(openApplication(EApplication.FINDER))
    dispatch(setApplicationUtils(finderUtils))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex h-full w-full flex-col">
      <Header utils={applicationUtils} />
      <main className="h-0 grow">{children}</main>
    </div>
  )
}

export default HomeLayout
