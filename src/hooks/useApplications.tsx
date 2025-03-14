import { EApplication } from '@/constants'
import {
  setActiveApplication,
  setApplicationUtils,
  setOpenApplications,
} from '@/stores/applications/slice'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { generateFinderUtils } from '@/utils'

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
    const remainOpenApplications = openApplications.filter((app) => app !== appName)
    // Close this app
    dispatch(setOpenApplications(remainOpenApplications))

    // Activate the adjacent app that is open
    dispatch(
      setActiveApplication(
        remainOpenApplications.length
          ? remainOpenApplications[remainOpenApplications.length - 1]
          : EApplication.FINDER,
      ),
    )
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
