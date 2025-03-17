'use client'

import { memo, useMemo, useRef } from 'react'
import Draggable from 'react-draggable'
import { useTranslations } from 'next-intl'
import classNames from 'classnames'
import { useAppSelector } from '@/stores/hooks'
import { EApplication } from '@/constants'
import { useApplications } from '@/hooks'
import { MacMiniIcon, WindowUtil } from '@/components'

const AboutThisMac = () => {
  const t = useTranslations()
  const { activeApplication, openApplications } = useAppSelector((state) => state.application)
  const { activateApp, closeApp } = useApplications()

  const isOpened = useMemo(
    () => openApplications.includes(EApplication.ABOUT_THIS_MAC),
    [openApplications],
  )

  const isActived = useMemo(
    () => activeApplication === EApplication.ABOUT_THIS_MAC,
    [activeApplication],
  )

  const aboutThisMacRef = useRef<HTMLDivElement>(null)

  return (
    <Draggable
      nodeRef={aboutThisMacRef}
      bounds="parent"
      cancel=".cancel-draggable"
      defaultPosition={{ x: 0, y: 0 }}
      onStart={() => activateApp(EApplication.ABOUT_THIS_MAC)}
    >
      <div
        ref={aboutThisMacRef}
        className={classNames(
          'bg-alabaster-200 absolute flex w-fit flex-col gap-4 rounded-xl p-2 shadow-md select-none',
          {
            '-z-50 opacity-0': !isOpened,
            'z-10 cursor-move': isActived,
          },
        )}
      >
        <WindowUtil onClose={() => closeApp(EApplication.ABOUT_THIS_MAC)} />
        <div className="flex flex-col items-center p-4">
          <MacMiniIcon className="h-12 w-12" />
          <div className="mt-2 text-xl font-bold">{t('about_this_mac.label.mac_mini')}</div>
          <div className="text-alabaster-500 text-[10px]">{t('about_this_mac.label.m1_2020')}</div>
          <div className="my-4 grid grid-cols-2 gap-x-2 text-[10px]">
            <div className="text-end">{t('about_this_mac.label.chip')}</div>
            <div>{t('about_this_mac.label.apple_m1')}</div>
            <div className="text-end">{t('about_this_mac.label.memory')}</div>
            <div>{t('about_this_mac.label.8gb')}</div>
            <div className="text-end">{t('about_this_mac.label.mac_os')}</div>
            <div>{t('about_this_mac.label.sequoia_15_1_1')}</div>
          </div>
          <div className="cancel-draggable bg-alabaster-400/70 hover:bg-alabaster-200 mb-4 cursor-pointer rounded-md px-2 py-1 text-xs">
            {t('about_this_mac.button.more_info')}
          </div>
          <div className="cancel-draggable text-alabaster-500 cursor-pointer text-[10px] underline hover:opacity-60">
            {t('about_this_mac.label.regulatory_certification')}
          </div>
          <div className="text-alabaster-500 text-[10px]">
            {t('about_this_mac.label.all_rights_reserved')}
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default memo(AboutThisMac)
