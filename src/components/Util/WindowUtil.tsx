import classNames from 'classnames'
import { Minus, MoveDiagonal, X } from 'lucide-react'

interface IWindowUtil {
  onClose: () => void
  onMinimize?: () => void
  onMaximize?: () => void
  className?: string
}

const WindowUtil = ({ onClose, onMinimize, onMaximize, className }: IWindowUtil) => {
  return (
    <div
      className={classNames(
        'group flex w-fit items-center gap-2 *:flex *:h-3 *:w-3 *:items-center *:justify-center *:rounded-full',
        className,
      )}
    >
      <div className="bg-red-500" onClick={onClose}>
        <X size={10} className="hidden group-hover:block" />
      </div>
      <div
        className={classNames('bg-yellow-400', {
          'border border-alabaster-400 border-opacity-70 !bg-transparent': !onMinimize,
        })}
        onClick={onMinimize}
      >
        {onMinimize && <Minus size={10} className={'hidden group-hover:block'} />}
      </div>
      <div
        className={classNames('bg-green-500', {
          'border border-alabaster-400 border-opacity-70 !bg-transparent': !onMinimize,
        })}
        onClick={onMaximize}
      >
        {onMaximize && <MoveDiagonal size={10} className="hidden group-hover:block" />}
      </div>
    </div>
  )
}

export default WindowUtil
