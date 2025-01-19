'use client'
import { Header } from '@/components'
import { EApplication, generateFinderUtils } from '@/constants'
import { setName as setAppName, setUtils as setAppUtils } from '@/stores/applications/slice'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo } from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations()
  const dispatch = useAppDispatch()
  const { utils } = useAppSelector((state) => state.application)

  const finderUtils = useMemo(() => generateFinderUtils(t), [t])

  useEffect(() => {
    // Set default open application
    dispatch(setAppName(EApplication.FINDER))
    dispatch(setAppUtils(finderUtils))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex h-full w-full flex-col">
      <Header utils={utils} />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default HomeLayout
