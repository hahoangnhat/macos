import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDropdown } from '@/interfaces'

export interface ApplicationState {
  openApplications: string[]
  applicationUtils: IDropdown[]
}

const initialState: ApplicationState = {
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

export const { openApplication, closeApplication, setApplicationUtils } = counterSlice.actions

export default counterSlice.reducer
