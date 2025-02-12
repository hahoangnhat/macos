import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDropdown } from '@/interfaces'
import { EApplication } from '@/constants'

export interface ApplicationState {
  activeApplication: string
  openApplications: EApplication[]
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
    setOpenApplications: (state: ApplicationState, action: PayloadAction<EApplication[]>) => {
      state.openApplications = action.payload
    },
    setActiveApplication: (state: ApplicationState, action: PayloadAction<string>) => {
      state.activeApplication = action.payload
    },
    setApplicationUtils: (state: ApplicationState, action: PayloadAction<IDropdown[]>) => {
      state.applicationUtils = action.payload
    },
  },
})

export const { setActiveApplication, setOpenApplications, setApplicationUtils } =
  counterSlice.actions

export default counterSlice.reducer
