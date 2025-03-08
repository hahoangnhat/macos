'use client'
import {
  EApplication,
  ESystemSettingItem,
  generateSystemSettingItems,
  releaseNotes,
} from '@/constants'
import { useAppSelector } from '@/stores/hooks'
import classNames from 'classnames'
import { ChangeEvent, ReactNode, useMemo, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { WindowUtil } from '../Util'
import { Input } from '../Input'
import {
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  CircleX,
  GitCompareArrows,
  HardDrive,
  IdCard,
  Search,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ISystemSettingItem } from '@/interfaces'
import { useApplications } from '@/hooks'
import usePathNavigation from '@/hooks/usePathNavigation'
import { PATH } from '@/constants'

interface ISystemWindowProps {
  children: ReactNode
  sectionName?: string
  isAppActive?: boolean
  back?: () => void
  forward?: () => void
}

const SystemWindow = ({
  children,
  sectionName,
  isAppActive,
  back,
  forward,
}: ISystemWindowProps) => {
  return (
    <div className="flex h-full w-112 flex-col">
      <div
        className={classNames('flex items-center gap-3 p-4', {
          'cursor-move': isAppActive,
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

const AppleAccount = ({ isAppActive }: { isAppActive: boolean }) => {
  const t = useTranslations()

  const { currentPath, navigate, back, forward, canGoBack, canGoForward } = usePathNavigation({
    historyInit: PATH.APPLE_ACCOUNT,
  })

  return (
    <SystemWindow
      sectionName={t('user.label.apple_account')}
      isAppActive={isAppActive}
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
    </SystemWindow>
  )
}

const General = ({ isAppActive }: { isAppActive: boolean }) => {
  const t = useTranslations()

  const [showAbout, setShowAbout] = useState<boolean>(false)
  const [showSoftwareUpdates, setShowSoftwareUpdates] = useState<boolean>(false)

  return (
    <SystemWindow isAppActive={isAppActive}>
      {!showAbout && !showSoftwareUpdates && (
        <>
          <div className="border-alabaster-300/30 bg-alabaster-200/25 mt-2 rounded-sm border p-2">
            <div className="text-center text-xl font-bold">
              {t('system_settings.label.general')}
            </div>
            <div className="text-alabaster-400 text-center text-xs">
              {t('system_settings.note.general')}
            </div>
          </div>

          <div className="border-alabaster-300/30 bg-alabaster-200/25 mt-2 flex cursor-pointer flex-col gap-2 rounded-sm border p-2">
            <div className="flex items-center justify-between" onClick={() => setShowAbout(true)}>
              <div className="flex items-center gap-2">
                <HardDrive size={20} />
                <div className="text-sm">{t('system_settings.label.about')}</div>
              </div>
              <ChevronRight size={16} className="text-alabaster-400" />
            </div>

            <div className="border-alabaster-300/30 border-t"></div>

            <div
              className="flex items-center justify-between"
              onClick={() => setShowSoftwareUpdates(true)}
            >
              <div className="flex items-center gap-2">
                <GitCompareArrows size={20} />
                <div className="text-sm">{t('system_settings.label.software_updates')}</div>
              </div>
              <ChevronRight size={16} className="text-alabaster-400" />
            </div>
          </div>
        </>
      )}

      {showAbout && (
        <div>
          <div className="text-center text-xl font-bold">{t('system_settings.label.about')}</div>
          <div className="text-alabaster-400 text-center text-xs">
            {t('system_settings.note.about')}
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold">{t('system_settings.label.version')}</div>
            <div className="text-alabaster-400 mt-1 text-xs">
              {t('system_settings.note.version')}
            </div>
            <div className="mt-2 text-sm font-semibold">
              {t('system_settings.label.description')}
            </div>
            <div className="text-alabaster-400 mt-1 text-xs">
              {t('system_settings.note.description')}
            </div>
          </div>
        </div>
      )}

      {showSoftwareUpdates && (
        <div>
          {releaseNotes.map((note) => (
            <div key={note.id}>
              <div className="text-xl font-medium">
                {t('system_settings.label.release_version', {
                  version: note.version,
                })}
              </div>
              <div className="text-alabaster-500 text-sm">{note.description}</div>
              <div className="my-2 font-medium">{t('system_settings.label.whats_new')}</div>
              <ul className="text-alabaster-500 flex flex-col gap-1 text-sm">
                {note.news.map((item) => (
                  <li key={item.id}>
                    {t.rich('system_settings.label.new_item', {
                      title: item.title,
                      description: item.description,
                      strong: (chunk) => <strong>{chunk}</strong>,
                    })}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </SystemWindow>
  )
}

const SystemSettings = () => {
  const t = useTranslations()
  const { activeApplication, openApplications } = useAppSelector((state) => state.application)
  const { activeApp, closeApp } = useApplications()

  const isSystemSettingApplicationOpened = useMemo(
    () => openApplications.includes(EApplication.SYSTEM_SETTINGS),
    [openApplications],
  )

  const isSystemSettingActived = useMemo(
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
      onStart={() => activeApp(EApplication.SYSTEM_SETTINGS)}
    >
      <div
        ref={settingsRef}
        className={classNames('absolute flex w-fit shadow-md select-none', {
          '-z-50 opacity-0': !isSystemSettingApplicationOpened,
          'z-10': isSystemSettingActived,
        })}
      >
        {/* Sidebar */}
        <div className="bg-alabaster-200 rounded-ss-xl rounded-es-xl">
          <div
            className={classNames('w-56 border-b px-2', {
              'border-alabaster-400/55': isScrolling,
              'border-transparent': !isScrolling,
              'cursor-move': isSystemSettingActived,
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
          {activeItem?.id === ESystemSettingItem.USER && (
            <AppleAccount isAppActive={isSystemSettingActived} />
          )}
          {activeItem?.id === ESystemSettingItem.GENERAL && (
            <General isAppActive={isSystemSettingActived} />
          )}
        </div>
      </div>
    </Draggable>
  )
}

export default SystemSettings
