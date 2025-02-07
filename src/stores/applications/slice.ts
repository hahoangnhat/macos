import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDropdown } from '@/interfaces'

export interface ApplicationState {
  activeApplication: string
  openApplications: string[]
  applicationUtils: IDropdown[]
}

const initialState: ApplicationState = {
  activeApplication: '',
  openApplications: [],
  applicationUtils: [],
}

export const counterSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    openApplication: (state: ApplicationState, action: PayloadAction<string>) => {
      state.openApplications.push(action.payload)
    },
    setActiveApplication: (state: ApplicationState, action: PayloadAction<string>) => {
      state.activeApplication = action.payload
    },
    closeApplication: (state: ApplicationState, action: PayloadAction<string>) => {
      state.openApplications = state.openApplications.filter(
        (application: string) => application !== action.payload,
      )
    },
    setApplicationUtils: (state: ApplicationState, action: PayloadAction<IDropdown[]>) => {
      state.applicationUtils = action.payload
    },
  },
})

export const { setActiveApplication, openApplication, closeApplication, setApplicationUtils } =
  counterSlice.actions

export default counterSlice.reducer
