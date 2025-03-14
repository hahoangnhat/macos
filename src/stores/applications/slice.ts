import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDropdown } from '@/interfaces'
import { EApplication, EApplicationActionType } from '@/constants'

interface ApplicationState {
  activeApplication: EApplication
  openApplications: EApplication[]
  applicationUtils: IDropdown[]
}

const initialState: ApplicationState = {
  activeApplication: EApplication.FINDER,
  openApplications: [EApplication.FINDER],
  applicationUtils: [],
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setApplicationUtils: (state, action: PayloadAction<IDropdown[]>) => {
      if (state.applicationUtils !== action.payload) {
        state.applicationUtils = action.payload
      }
    },
    handleApplicationState: (
      state,
      action: PayloadAction<{ type: EApplicationActionType; appName?: EApplication }>,
    ) => {
      const { type, appName } = action.payload

      switch (type) {
        case EApplicationActionType.OPEN:
          if (appName && !state.openApplications.includes(appName)) {
            state.openApplications = [...state.openApplications, appName]
          }
          state.activeApplication = appName || state.activeApplication
          break

        case EApplicationActionType.ACTIVATE:
          if (appName && state.openApplications.includes(appName)) {
            state.activeApplication = appName
          }
          break

        case EApplicationActionType.CLOSE:
          if (appName) {
            state.openApplications = state.openApplications.filter((app) => app !== appName)
            state.activeApplication =
              state.openApplications.length > 0
                ? state.openApplications[state.openApplications.length - 1]
                : EApplication.FINDER
          }
          break

        case EApplicationActionType.RESET:
          state.activeApplication = EApplication.FINDER
          state.openApplications = [EApplication.FINDER]
          break

        default:
          break
      }
    },
  },
})

export const { setApplicationUtils, handleApplicationState } = applicationSlice.actions
export default applicationSlice.reducer
