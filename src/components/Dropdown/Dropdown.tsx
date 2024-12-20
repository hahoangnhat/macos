'use client'

import { IDropdownItem } from '@/interfaces'
import classNames from 'classnames'
import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react'

interface IDropdownProps {
  id: number
  label: ReactNode
  items: IDropdownItem[]
  isMenuActive: boolean
  setMenuActive: Dispatch<SetStateAction<boolean>>
  activeItem: number
  setActiveItem: Dispatch<SetStateAction<number>>
  className?: string
}

const Dropdown = ({
  id,
  label,
  items,
  isMenuActive,
  setMenuActive,
  activeItem,
  setActiveItem,
  className,
}: IDropdownProps) => {
  const buttonClassname = classNames('h-full cursor-pointer rounded px-3 py-1', className, {
    'hover:bg-alabaster-100 hover:bg-opacity-30': isMenuActive,
    'bg-alabaster-100 bg-opacity-30': isMenuActive && activeItem === id,
  })

  const dropdownClassname = classNames(
    'w-max-content min-w-60 absolute top-full translate-y-0.5 text-xs',
    'flex flex-col rounded-md bg-alabaster-50 bg-opacity-55 p-1 text-black backdrop-blur-xl',
  )

  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()

    if (activeItem === id) {
      setMenuActive(false)
      setActiveItem(-1)
    } else {
      setMenuActive(true)
      setActiveItem(id)
    }
  }

  return (
    <div className="relative h-full">
      {/* Active button */}
      <div
        className={buttonClassname}
        onClick={handleToggle}
        {...(isMenuActive && { onMouseOver: () => setActiveItem(id) })}
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
