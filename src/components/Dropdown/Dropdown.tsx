'use client'

import { IDropdownItem } from '@/interfaces'
import classNames from 'classnames'
import { Fragment, ReactNode } from 'react'

interface IDropdownProps {
  id: string
  label: ReactNode
  items: IDropdownItem[]
  isMenuActive: boolean
  handleActiveMenu: (active: boolean) => void
  activeItem: string
  handleActiveMenuItem: (id: string) => void
  className?: string
}

const Dropdown = ({
  id,
  label,
  items,
  isMenuActive,
  handleActiveMenu,
  activeItem,
  handleActiveMenuItem,
  className,
}: IDropdownProps) => {
  const buttonClassname = classNames(
    'h-full cursor-pointer rounded-sm px-3 py-1 select-none',
    {
      'hover:bg-alabaster-100/30': isMenuActive,
      'bg-alabaster-100/30': isMenuActive && activeItem === id,
    },
    className,
  )

  const dropdownClassname = classNames(
    'w-max-content min-w-60 absolute top-full translate-y-0.5 text-xs select-none z-50',
    'flex flex-col rounded-md bg-alabaster-300 p-1 text-black shadow-md',
  )

  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()

    if (activeItem === id) {
      handleActiveMenu(false)
      handleActiveMenuItem('')
    } else {
      handleActiveMenu(true)
      handleActiveMenuItem(id)
    }
  }

  return (
    <div className="relative h-full">
      {/* Active button */}
      <div
        className={buttonClassname}
        onClick={handleToggle}
        {...(isMenuActive && { onMouseOver: () => handleActiveMenuItem(id) })}
      >
        {label}
      </div>

      {/* Dropdown */}
      {isMenuActive && activeItem === id && (
        <div className={dropdownClassname}>
          {items.map((i: IDropdownItem) => (
            <Fragment key={i.id}>{i.item}</Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
