'use client'

import { useMemo, useRef } from 'react'
import Draggable from 'react-draggable'
import { WindowUtil } from '../Util'
import { useTranslations } from 'next-intl'
import { MacMiniIcon } from '../Icons'
import { closeApplication } from '@/stores/applications/slice'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import { EApplication } from '@/constants'

const AboutThisMac = () => {
  const t = useTranslations()
  const dispatch = useAppDispatch()
  const openApplications = useAppSelector((state) => state.application.openApplications)
  const isAboutThisMacApplicationOpened = useMemo(
    () => openApplications.includes(EApplication.ABOUT_THIS_MAC),
    [openApplications],
  )

  const aboutThisMacRef = useRef<HTMLDivElement>(null)

  return (
    <Draggable
      nodeRef={aboutThisMacRef}
      bounds="parent"
      cancel=".cancel-draggable"
      defaultPosition={{ x: 0, y: 0 }}
    >
      <div
        ref={aboutThisMacRef}
        className={classNames(
          'flex w-fit cursor-move select-none flex-col gap-4 rounded-xl bg-alabaster-200 p-2 shadow-md',
          {
            'opacity-0': !isAboutThisMacApplicationOpened,
          },
        )}
      >
        <WindowUtil onClose={() => dispatch(closeApplication(EApplication.ABOUT_THIS_MAC))} />
        <div className="flex flex-col items-center p-4">
          <MacMiniIcon className="h-12 w-12" />
          <div className="mt-2 text-xl font-bold">{t('about_this_mac.label.mac_mini')}</div>
          <div className="text-[10px] text-alabaster-500">{t('about_this_mac.label.m1_2020')}</div>
          <div className="my-4 grid grid-cols-2 gap-x-2 text-[10px]">
            <div className="text-end">{t('about_this_mac.label.chip')}</div>
            <div>{t('about_this_mac.label.apple_m1')}</div>
            <div className="text-end">{t('about_this_mac.label.memory')}</div>
            <div>{t('about_this_mac.label.8gb')}</div>
            <div className="text-end">{t('about_this_mac.label.mac_os')}</div>
            <div>{t('about_this_mac.label.sequoia_15_1_1')}</div>
          </div>
          <div className="cancel-draggable mb-4 cursor-pointer rounded-md bg-alabaster-400 bg-opacity-70 px-2 py-1 text-xs hover:bg-alabaster-200">
            {t('about_this_mac.button.more_info')}
          </div>
          <div className="cancel-draggable cursor-pointer text-[10px] text-alabaster-500 underline hover:opacity-60">
            {t('about_this_mac.label.regulatory_certification')}
          </div>
          <div className="text-[10px] text-alabaster-500">
            {t('about_this_mac.label.all_rights_reserved')}
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default AboutThisMac
