import { ReactNode } from 'react'

export interface IDropdown {
  id: number
  label: string
  items: IDropdownItem[]
}

export interface IDropdownItem {
  id: number
  item: ReactNode
}
