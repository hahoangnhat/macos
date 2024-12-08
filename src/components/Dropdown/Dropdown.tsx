'use client'

import { IDropdownOptionProps } from '@/interfaces'
import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'

interface IDropdownProps {
  id: number
  button: React.ReactNode
  options: IDropdownOptionProps[]
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  activeItem: number
  setActiveItem: Dispatch<SetStateAction<number>>
  className?: string
}

const Dropdown = ({
  id,
  button,
  options,
  active,
  setActive,
  activeItem,
  setActiveItem,
  className,
}: IDropdownProps) => {
  const buttonClassname = classNames('h-full cursor-pointer rounded px-3 py-1', className, {
    'hover:bg-alabaster-100 hover:bg-opacity-30': active,
    'bg-alabaster-100 bg-opacity-30': active && activeItem === id,
  })

  const dropdownClassname = classNames(
    'w-max-content absolute top-full translate-y-0.5',
    'flex flex-col gap-1 rounded-md bg-alabaster-50 bg-opacity-90 p-2 text-black',
  )

  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()

    if (activeItem === id) {
      setActive(false)
      setActiveItem(-1)
    } else {
      setActive(true)
      setActiveItem(id)
    }
  }

  return (
    <div className="relative h-full">
      {/* Active button */}
      <div
        className={buttonClassname}
        onClick={handleToggle}
        {...(active && { onMouseOver: () => setActiveItem(id) })}
      >
        {button}
      </div>

      {/* Dropdown */}
      {active && activeItem === id && (
        <div className={dropdownClassname}>
          {options.map((option: IDropdownOptionProps) => (
            <span key={option.id} className="text-nowrap">
              {option.label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
