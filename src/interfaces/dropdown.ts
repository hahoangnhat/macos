import { ReactNode } from 'react'

export interface IDropdown {
  id: string
  label: string
  items: IDropdownItem[]
}

export interface IDropdownItem {
  id: string
  item: ReactNode
}

// Props
export interface IDropdownItemProps {
  label: ReactNode
  groupTitle?: ReactNode
  shortcut?: ReactNode
  className?: string
  hasDivider?: boolean
  onClick?: () => void
}
