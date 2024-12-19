import classNames from 'classnames'
import { ReactNode } from 'react'

interface IDropdownItemProps {
  label: ReactNode
  shortcut?: ReactNode
  className?: string
  hasDivider?: boolean
}

const DropdownItem = ({ label, shortcut, className, hasDivider = false }: IDropdownItemProps) => {
  return (
    <>
      <div
        className={classNames(
          'flex w-full items-center justify-between gap-2 px-2 py-1 hover:rounded-md hover:bg-steel-blue-600 hover:text-white',
          className,
        )}
      >
        <div className="text-nowrap">{label}</div>
        {shortcut && <span className="text-alabaster-500">{shortcut}</span>}
      </div>
      {hasDivider && <div className="mx-2 my-1 h-px bg-alabaster-400"></div>}
    </>
  )
}

export default DropdownItem
