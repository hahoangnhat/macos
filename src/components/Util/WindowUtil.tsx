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
        'group flex w-fit items-center gap-2 *:flex *:h-3 *:w-3 *:cursor-pointer *:items-center *:justify-center *:rounded-full',
        className,
      )}
    >
      {/* Close */}
      <div className="cancel-draggable bg-red-500" onClick={onClose}>
        <X size={10} className="hidden group-hover:block" />
      </div>

      {/* Minimize */}
      <div
        className={classNames('cancel-draggable bg-yellow-400', {
          'border-alabaster-400/70 border bg-transparent!': !onMinimize,
        })}
        onClick={onMinimize}
      >
        {onMinimize && <Minus size={10} className={'hidden group-hover:block'} />}
      </div>

      {/* Maximize */}
      <div
        className={classNames('cancel-draggable bg-green-500', {
          'border-alabaster-400/70 border bg-transparent!': !onMinimize,
        })}
        onClick={onMaximize}
      >
        {onMaximize && <MoveDiagonal size={10} className="hidden group-hover:block" />}
      </div>
    </div>
  )
}

export default WindowUtil
