'use client'
import { EApplication } from '@/constants'
import { useAppSelector } from '@/stores/hooks'
import classNames from 'classnames'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ReactNode } from 'react'

interface ILayoutProps {
  children: ReactNode
  sectionName?: string
  back?: () => void
  forward?: () => void
}

const Layout = ({ children, sectionName, back, forward }: ILayoutProps) => {
  const { activeApplication } = useAppSelector((state) => state.application)

  return (
    <div className="flex h-full w-112 flex-col">
      <div
        className={classNames('flex items-center gap-3 p-4', {
          'cursor-move': activeApplication === EApplication.SYSTEM_SETTINGS,
        })}
      >
        <div className="text-alabaster-500 flex items-center gap-4 *:h-6 *:w-6">
          <ChevronLeft
            onClick={back}
            className={classNames({ 'cursor-pointer': back, 'opacity-60': !back })}
          />
          <ChevronRight
            onClick={forward}
            className={classNames({ 'cursor-pointer': forward, 'opacity-60': !forward })}
          />
        </div>

        {sectionName && (
          <div className="text-alabaster-900 text-sm font-semibold">{sectionName}</div>
        )}
      </div>

      <div className="cancel-draggable flex-1 p-4 pt-0">{children}</div>
    </div>
  )
}

export default Layout
