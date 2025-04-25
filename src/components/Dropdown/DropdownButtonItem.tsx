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
        <div className="text-alabaster-500 px-2 py-1 text-[10px] font-medium">{groupTitle}</div>
      )}
      <div
        className={classNames(
          'group hover:bg-steel-blue-600 flex w-full items-center justify-between gap-2 px-2 py-1 hover:rounded-md',
          className,
        )}
        onClick={onClick}
      >
        <div className="text-nowrap group-hover:text-white">{label}</div>
        {shortcut && (
          <span className="text-alabaster-400/90 group-hover:text-white">{shortcut}</span>
        )}
      </div>
      {hasDivider && <div className="bg-alabaster-400/55 mx-2 my-1 h-px"></div>}
    </div>
  )
}

export default DropdownButtonItem
