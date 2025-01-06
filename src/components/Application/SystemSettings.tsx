'use client'
import { EApplication, systemSettingItems } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import classNames from 'classnames'
import { useMemo, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { WindowUtil } from '../Util'
import { setName as setAppName } from '@/stores/applications/slice'
import { Input } from '../Input'
import { CircleUserRound, CircleX, Search } from 'lucide-react'
import { useTranslations } from 'next-intl'

const SystemSettings = () => {
  const t = useTranslations()
  const dispatch = useAppDispatch()
  const appName = useAppSelector((state) => state.application.name)

  const settingsRef = useRef<HTMLDivElement>(null)

  const [activeItem, setActiveItem] = useState<string>('')

  const systemItems = useMemo(() => systemSettingItems(t), [t])

  return (
    <Draggable nodeRef={settingsRef} bounds="parent" cancel=".cancel-draggable">
      <div
        ref={settingsRef}
        className={classNames('flex w-fit', {
          hidden: appName !== EApplication.SYSTEM_SETTINGS,
        })}
      >
        <div className="w-56 rounded-es-xl rounded-ss-xl bg-alabaster-50 bg-opacity-55 px-2 backdrop-blur-2xl">
          <WindowUtil onClose={() => dispatch(setAppName(''))} className="p-2 pb-5 pt-4" />
          <Input
            showStartIcon={<Search className="h-4 w-4" />}
            showEndIcon={
              <div className="h-4 w-4 p-px">
                <CircleX className="h-full w-full" />
              </div>
            }
          />
          <div className="cancel-draggable my-2 max-h-[500px] w-full overflow-y-auto pr-3">
            <div
              className={classNames('flex cursor-pointer items-center gap-1 rounded-md p-1', {
                'bg-steel-blue-600 text-white': activeItem === 'user',
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
