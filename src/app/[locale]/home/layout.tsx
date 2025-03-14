'use client'
import { Dock, Header } from '@/components'
import { useApplications } from '@/hooks'
import { useAppSelector } from '@/stores/hooks'
import { useEffect } from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const applicationUtils = useAppSelector((state) => state.application.applicationUtils)
  const { forceQuitAll } = useApplications()

  useEffect(() => {
    // Force quit all applications for the first visit
    forceQuitAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex h-full w-full flex-col">
      <Header utils={applicationUtils} />
      <main className="relative h-0 grow">
        {children}
        <div className="absolute bottom-2 flex w-full justify-center">
          <Dock />
        </div>
      </main>
    </div>
  )
}

export default HomeLayout
