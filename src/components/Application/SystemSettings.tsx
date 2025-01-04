'use client'
import { EApplication } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import classNames from 'classnames'
import { useRef } from 'react'
import Draggable from 'react-draggable'
import { WindowUtil } from '../Util'
import { setName as setAppName } from '@/stores/applications/slice'
import { Input } from '../Input'

const SystemSettings = () => {
  const dispatch = useAppDispatch()
  const appName = useAppSelector((state) => state.application.name)

  const settingsRef = useRef<HTMLDivElement>(null)

  return (
    <Draggable nodeRef={settingsRef} bounds="parent" cancel="input">
      <div
        ref={settingsRef}
        className={classNames('flex w-fit', {
          hidden: appName !== EApplication.SYSTEM_SETTINGS,
        })}
      >
        <div className="rounded-es-xl rounded-ss-xl bg-alabaster-200 px-2">
          <WindowUtil onClose={() => dispatch(setAppName(''))} className="p-2 pb-5 pt-4" />
          <Input />
        </div>
        <div className="rounded-ee-xl rounded-se-xl bg-alabaster-100 p-4">hello</div>
      </div>
    </Draggable>
  )
}

export default SystemSettings
