'use client'
import { EApplication } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import classNames from 'classnames'
import { useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { WindowUtil } from '../Util'
import { setName as setAppName } from '@/stores/applications/slice'
import { Input } from '../Input'
import {
  Bluetooth,
  CircleUserRound,
  CircleX,
  Cog,
  Dock,
  Globe,
  PersonStanding,
  Search,
  SunMedium,
  SunSnow,
  ToggleLeft,
  Wifi,
  Zap,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'

const SystemSettings = () => {
  const t = useTranslations()
  const dispatch = useAppDispatch()
  const appName = useAppSelector((state) => state.application.name)

  const settingsRef = useRef<HTMLDivElement>(null)

  const [activeItem, setActiveItem] = useState<string>('')

  const systemItems = [
    {
      id: uuidv4(),
      icon: <Wifi className="h-4 w-4" />,
      name: t('system_settings.label.wifi'),
      className: 'mt-2',
    },
    {
      id: uuidv4(),
      icon: <Bluetooth className="h-4 w-4" />,
      name: t('system_settings.label.bluetooth'),
    },
    {
      id: uuidv4(),
      icon: <Globe className="h-4 w-4" />,
      name: t('system_settings.label.network'),
    },
    {
      id: uuidv4(),
      icon: <Zap className="h-4 w-4" />,
      name: t('system_settings.label.energy'),
    },
    {
      id: uuidv4(),
      icon: <Cog className="h-4 w-4" />,
      name: t('system_settings.label.general'),
      className: 'mt-2',
    },
    {
      id: uuidv4(),
      icon: <PersonStanding className="h-4 w-4" />,
      name: t('system_settings.label.accessibility'),
    },
    {
      id: uuidv4(),
      icon: <SunSnow className="h-4 w-4" />,
      name: t('system_settings.label.appearance'),
    },
    {
      id: uuidv4(),
      icon: <ToggleLeft className="h-4 w-4" />,
      name: t('system_settings.label.control_center'),
    },
    {
      id: uuidv4(),
      icon: <Dock className="h-4 w-4" />,
      name: t('system_settings.label.desktop_and_dock'),
    },
    {
      id: uuidv4(),
      icon: <SunMedium className="h-4 w-4" />,
      name: t('system_settings.label.displays'),
    },
  ]

  return (
    <Draggable nodeRef={settingsRef} bounds="parent" cancel=".cancel-draggable">
      <div
        ref={settingsRef}
        className={classNames('flex w-fit', {
          hidden: appName !== EApplication.SYSTEM_SETTINGS,
        })}
      >
        <div className="rounded-es-xl rounded-ss-xl bg-alabaster-200 px-2">
          <WindowUtil onClose={() => dispatch(setAppName(''))} className="p-2 pb-5 pt-4" />
          <Input
            showStartIcon={<Search className="h-4 w-4" />}
            showEndIcon={
              <div className="h-4 w-4 p-px">
                <CircleX className="h-full w-full" />
              </div>
            }
          />
          <div className="mt-2 max-h-[500px] w-full overflow-y-auto">
            <div
              className={classNames('flex cursor-pointer items-center gap-1 rounded-md p-1', {
                'bg-blue-500 bg-opacity-90 text-white': activeItem === 'user',
              })}
              onClick={() => setActiveItem('user')}
            >
              <CircleUserRound className="h-10 w-10" />
              <div className="flex flex-col gap-1 text-sm">
                <div className="font-bold">{t('user.label.full_name')}</div>
                <div className="text-xs">{t('user.label.apple_account')}</div>
              </div>
            </div>

            {systemItems.map((item) => (
              <div
                key={item.id}
                className={classNames(
                  'flex cursor-pointer items-center gap-1 rounded-md p-1',
                  {
                    'bg-blue-500 bg-opacity-90 text-white': activeItem === item.id,
                  },
                  item.className,
                )}
                onClick={() => setActiveItem(item.id)}
              >
                {item.icon}
                <div className="text-sm">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-ee-xl rounded-se-xl bg-alabaster-100 p-4">hello</div>
      </div>
    </Draggable>
  )
}

export default SystemSettings
