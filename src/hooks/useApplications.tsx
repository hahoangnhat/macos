import { EApplication, generateFinderUtils } from '@/constants'
import {
  setActiveApplication,
  setApplicationUtils,
  setOpenApplications,
} from '@/stores/applications/slice'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

const useApplications = () => {
  const t = useTranslations()
  const dispatch = useAppDispatch()
  const { openApplications } = useAppSelector((state) => state.application)

  const finderUtils = useMemo(() => generateFinderUtils(t), [t])

  const activeApp = (appName: EApplication) => {
    dispatch(setActiveApplication(appName))
  }

  const openApp = (appName: EApplication) => {
    dispatch(setOpenApplications([...openApplications, appName]))
    activeApp(appName)
  }

  const closeApp = (appName: EApplication) => {
    dispatch(setOpenApplications(openApplications.filter((app) => app !== appName)))
  }

  const forceQuit = () => {
    dispatch(setActiveApplication(''))
    dispatch(setOpenApplications([EApplication.FINDER]))
    dispatch(setApplicationUtils(finderUtils))
  }

  return {
    activeApp,
    openApp,
    closeApp,
    forceQuit,
  }
}

export default useApplications
