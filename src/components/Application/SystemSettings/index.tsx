'use client'
import { EApplication, ESystemSettingItem } from '@/constants'
import { useAppSelector } from '@/stores/hooks'
import classNames from 'classnames'
import { ChangeEvent, useMemo, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { CircleUserRound, CircleX, Search } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ISystemSettingItem } from '@/interfaces'
import { useApplications } from '@/hooks'
import { generateSystemSettingItems } from '@/utils'
import { AppleAccount, General } from './sections'
import { Input, WindowUtil } from '@/components'

const SystemSettings = () => {
  const t = useTranslations()
  const { activeApplication, openApplications } = useAppSelector((state) => state.application)
  const { activateApp, closeApp } = useApplications()

  const isOpened = useMemo(
    () => openApplications.includes(EApplication.SYSTEM_SETTINGS),
    [openApplications],
  )

  const isActived = useMemo(
    () => activeApplication === EApplication.SYSTEM_SETTINGS,
    [activeApplication],
  )

  const settingsRef = useRef<HTMLDivElement>(null)

  const userItem = useMemo(
    () => ({
      id: ESystemSettingItem.USER,
      icon: '',
      name: t('user.label.apple_account'),
    }),
    [t],
  )

  const [activeItem, setActiveItem] = useState<ISystemSettingItem>(userItem)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')

  const systemItems = useMemo(
    () => generateSystemSettingItems(t).filter((item) => item.name.includes(query)),
    [t, query],
  )

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop
    setIsScrolling(scrollTop > 0)
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <Draggable
      nodeRef={settingsRef}
      bounds="parent"
      cancel=".cancel-draggable"
      defaultPosition={{ x: 0, y: 0 }}
      onStart={() => activateApp(EApplication.SYSTEM_SETTINGS)}
    >
      <div
        ref={settingsRef}
        className={classNames('absolute flex w-fit shadow-md select-none', {
          '-z-50 opacity-0': !isOpened,
          'z-10': isActived,
        })}
      >
        {/* Sidebar */}
        <div className="bg-alabaster-200 rounded-ss-xl rounded-es-xl">
          <div
            className={classNames('w-56 border-b px-2', {
              'border-alabaster-400/55': isScrolling,
              'border-transparent': !isScrolling,
              'cursor-move': isActived,
            })}
          >
            <WindowUtil
              onClose={() => closeApp(EApplication.SYSTEM_SETTINGS)}
              className="p-2 pt-4 pb-5"
            />
            <Input
              showStartIcon={<Search className="h-4 w-4" />}
              {...(query && {
                showEndIcon: (
                  <div className="h-4 w-4 p-px" onClick={() => setQuery('')}>
                    <CircleX className="h-full w-full" />
                  </div>
                ),
              })}
              placeholder={t('common.placeholder.search')}
              value={query}
              onChange={handleSearch}
            />
          </div>
          <div
            className="cancel-draggable h-[500px] w-full overflow-y-auto px-2 pt-5 pr-3 pb-2"
            onScroll={handleScroll}
          >
            <div
              className={classNames('flex cursor-pointer items-center gap-1 rounded-md p-1', {
                'bg-steel-blue-600 text-white': activeItem?.id === ESystemSettingItem.USER,
              })}
              onClick={() => setActiveItem(userItem)}
            >
              <CircleUserRound className="h-10 w-10" />
              <div className="text-sm">
                <div className="font-bold">{t('user.label.full_name')}</div>
                <div className="text-xs">{t('user.label.apple_account')}</div>
              </div>
            </div>

            {systemItems.map((item: ISystemSettingItem) => (
              <div
                key={item.id}
                className={classNames(
                  'flex cursor-pointer items-center gap-2 rounded-md p-1',
                  {
                    'bg-blue-500/90 text-white': activeItem?.id === item.id,
                  },
                  item.className,
                )}
                onClick={() => setActiveItem(item)}
              >
                {item.icon}
                <div className="text-sm">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-alabaster-100 rounded-se-xl rounded-ee-xl">
          {activeItem?.id === ESystemSettingItem.USER && <AppleAccount />}
          {activeItem?.id === ESystemSettingItem.GENERAL && <General />}
        </div>
      </div>
    </Draggable>
  )
}

export default SystemSettings
