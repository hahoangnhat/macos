'use client'
import { Header } from '@/components'
import { useApplications } from '@/hooks'
import { useAppSelector } from '@/stores/hooks'
import { useEffect } from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const applicationUtils = useAppSelector((state) => state.application.applicationUtils)
  const { forceQuit } = useApplications()

  useEffect(() => {
    // Force quit all applications for the first visit
    forceQuit()
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
