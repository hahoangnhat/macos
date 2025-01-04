import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDropdown } from '@/interfaces'

export interface ApplicationState {
  name: string
  utils: IDropdown[]
}

const initialState: ApplicationState = {
  name: '',
  utils: [],
}

export const counterSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setName: (state: ApplicationState, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUtils: (state: ApplicationState, action: PayloadAction<IDropdown[]>) => {
      state.utils = action.payload
    },
  },
})

export const { setName, setUtils } = counterSlice.actions

export default counterSlice.reducer
