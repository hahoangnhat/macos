import { EApplication, EApplicationActionType } from '@/constants'
import { handleApplicationState, setApplicationUtils } from '@/stores/applications/slice'
import { useAppDispatch } from '@/stores/hooks'
import { useTranslations } from 'next-intl'
import { useMemo, useCallback } from 'react'
import { generateFinderUtils } from '@/utils'

const useApplications = () => {
  const t = useTranslations()
  const dispatch = useAppDispatch()

  const finderUtils = useMemo(() => generateFinderUtils(t), [t])

  const handleAppAction = useCallback(
    (type: EApplicationActionType, appName?: EApplication) => {
      dispatch(handleApplicationState({ type, appName }))
    },
    [dispatch],
  )

  // Bring app to front
  const activateApp = (appName: EApplication) =>
    handleAppAction(EApplicationActionType.ACTIVATE, appName)

  // Open app window
  const launchApp = (appName: EApplication) => handleAppAction(EApplicationActionType.OPEN, appName)

  // Close app window
  const closeApp = (appName: EApplication) => handleAppAction(EApplicationActionType.CLOSE, appName)

  // Force quit all apps
  const forceQuitAll = useCallback(() => {
    dispatch(handleApplicationState({ type: EApplicationActionType.RESET }))
    dispatch(setApplicationUtils(finderUtils))
  }, [dispatch, finderUtils])

  return {
    activateApp,
    launchApp,
    closeApp,
    forceQuitAll,
  }
}

export default useApplications
