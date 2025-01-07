'use client'
import { IDropdownItem, IDropdownItemProps } from '@/interfaces'
import classNames from 'classnames'
import { ChevronRight } from 'lucide-react'

interface IDropdownSubMenuProps extends IDropdownItemProps {
  menuItems: IDropdownItem[]
}

const DropdownSubMenu = ({
  label,
  className,
  hasDivider = false,
  menuItems,
}: IDropdownSubMenuProps) => {
  const dropdownClassname = classNames(
    'w-max-content min-w-60 absolute top-full translate-y-0.5 text-xs select-none z-50',
    'flex flex-col rounded-md bg-alabaster-300 p-1 text-black shadow-md',
  )

  return (
    <>
      <div
        className={classNames(
          'group/menu relative flex w-full items-center justify-between gap-2 px-2 py-1 hover:rounded-md hover:bg-steel-blue-600',
          className,
        )}
      >
        <div className="text-nowrap group-hover/menu:text-white">{label}</div>
        <ChevronRight className="h-4 w-4 group-hover/menu:text-white" />

        <div
          className={classNames(
            dropdownClassname,
            'absolute !-top-[2px] right-0 hidden translate-x-full group-hover/menu:block',
          )}
        >
          {menuItems?.map((item: IDropdownItem) => <div key={item.id}>{item.item}</div>)}
        </div>
      </div>
      {hasDivider && <div className="mx-2 my-1 h-px bg-alabaster-400 bg-opacity-55"></div>}
    </>
  )
}

export default DropdownSubMenu
