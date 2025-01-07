import { IDropdownItemProps } from '@/interfaces'
import classNames from 'classnames'

const DropdownButtonItem = ({
  label,
  groupTitle,
  shortcut,
  className,
  hasDivider = false,
  onClick,
}: IDropdownItemProps) => {
  return (
    <div className="flex flex-col">
      {groupTitle && (
        <div className="px-2 py-1 text-[10px] font-medium text-alabaster-500">{groupTitle}</div>
      )}
      <div
        className={classNames(
          'group flex w-full items-center justify-between gap-2 px-2 py-1 hover:rounded-md hover:bg-steel-blue-600',
          className,
        )}
        onClick={onClick}
      >
        <div className="text-nowrap group-hover:text-white">{label}</div>
        {shortcut && (
          <span className="bg-opacity-55 text-alabaster-400 group-hover:text-white">
            {shortcut}
          </span>
        )}
      </div>
      {hasDivider && <div className="mx-2 my-1 h-px bg-alabaster-400 bg-opacity-55"></div>}
    </div>
  )
}

export default DropdownButtonItem
