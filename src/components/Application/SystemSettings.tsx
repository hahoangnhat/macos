'use client'
import { EApplication, generateSystemSettingItems } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import classNames from 'classnames'
import { ChangeEvent, ReactNode, useMemo, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { WindowUtil } from '../Util'
import { setName as setAppName } from '@/stores/applications/slice'
import { Input } from '../Input'
import { ChevronLeft, ChevronRight, CircleUserRound, CircleX, IdCard, Search } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ISystemSettingItem } from '@/interfaces/applications'

interface ISystemWindowProps {
  children: ReactNode
  applicationName?: string
}

const SystemWindow = ({ children, applicationName }: ISystemWindowProps) => {
  return (
    <div className="w-112">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-4 text-alabaster-500 *:h-6 *:w-6">
          <ChevronLeft />
          <ChevronRight />
        </div>
        {applicationName && (
          <div className="text-sm font-semibold text-alabaster-900">{applicationName}</div>
        )}
      </div>

      {children}
    </div>
  )
}

const AppleAccount = () => {
  const t = useTranslations()
  const [showUserInformation, setShowUserInformation] = useState<boolean>(false)

  return (
    <SystemWindow applicationName={t('user.label.apple_account')}>
      {!showUserInformation && (
        <>
          <div className="flex flex-col items-center justify-center py-5">
            <CircleUserRound className="h-20 w-20" />
            <div className="font-bold">{t('user.label.full_name')}</div>
            <div className="text-sm">{t('user.label.email')}</div>
          </div>

          <div
            className="flex cursor-pointer items-center justify-between rounded border border-alabaster-300 border-opacity-30 bg-alabaster-200 bg-opacity-25 p-2"
            onClick={() => setShowUserInformation(true)}
          >
            <div className="flex items-center gap-2">
              <IdCard />
              <div className="text-sm">{t('user.label.personal_information')}</div>
            </div>
            <ChevronRight className="h-4 w-4 text-alabaster-400" />
          </div>
        </>
      )}

      {showUserInformation && (
        <div className="mt-4 flex flex-col gap-2 rounded border border-alabaster-300 border-opacity-30 bg-alabaster-200 bg-opacity-25 p-2">
          <div className="flex cursor-pointer items-center justify-between text-xs">
            <div>{t('user.label.name')}</div>
            <div className="flex items-center gap-2 text-alabaster-400">
              <div>{t('user.label.full_name')}</div>
              <ChevronRight className="h-4 w-4 text-alabaster-400" />
            </div>
          </div>

          <div className="h-px w-full bg-alabaster-300 bg-opacity-30"></div>

          <div className="flex cursor-pointer items-center justify-between text-xs">
            <div>{t('user.label.date_of_birth')}</div>
            <div className="mr-2 text-alabaster-400">{t('user.label.birth_date')}</div>
          </div>
        </div>
      )}
    </SystemWindow>
  )
}

const SystemSettings = () => {
  const t = useTranslations()
  const dispatch = useAppDispatch()
  const appName = useAppSelector((state) => state.application.name)

  const settingsRef = useRef<HTMLDivElement>(null)

  const userItem = useMemo(
    () => ({
      id: 'user',
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
    <Draggable nodeRef={settingsRef} bounds="parent" cancel=".cancel-draggable">
      <div
        ref={settingsRef}
        className={classNames('flex w-fit shadow-md', {
          hidden: appName !== EApplication.SYSTEM_SETTINGS,
        })}
      >
        <div className="rounded-es-xl rounded-ss-xl bg-alabaster-200">
          <div
            className={classNames('w-56 border-b px-2 pb-3', {
              'border-alabaster-400 border-opacity-55': isScrolling,
              'border-transparent': !isScrolling,
            })}
          >
            <WindowUtil onClose={() => dispatch(setAppName(''))} className="p-2 pb-5 pt-4" />
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
            className="cancel-draggable h-[500px] w-full overflow-y-auto px-2 py-2 pr-3"
            onScroll={handleScroll}
          >
            <div
              className={classNames('flex cursor-pointer items-center gap-1 rounded-md p-1', {
                'bg-steel-blue-600 text-white': activeItem?.id === 'user',
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
                    'bg-blue-500 bg-opacity-90 text-white': activeItem?.id === item.id,
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
        <div className="rounded-ee-xl rounded-se-xl bg-alabaster-100 p-4">
          {activeItem?.id === 'user' && <AppleAccount />}
        </div>
      </div>
    </Draggable>
  )
}

export default SystemSettings
