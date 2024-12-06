import { useDispatch, useSelector } from 'react-redux'
import { AppStore, type AppDispatch, type RootState } from '..'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useSelector.withTypes<AppStore>()
