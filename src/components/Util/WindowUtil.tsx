import { Minus, MoveDiagonal, X } from 'lucide-react'

interface IWindowUtil {
  onClose: () => void
}

const WindowUtil = ({ onClose }: IWindowUtil) => {
  return (
    <div className="group flex w-fit items-center gap-2 *:flex *:h-3 *:w-3 *:items-center *:justify-center *:rounded-full">
      <div className="bg-red-500" onClick={onClose}>
        <X size={10} className="hidden group-hover:block" />
      </div>
      <div className="bg-yellow-400">
        <Minus size={10} className="hidden group-hover:block" />
      </div>
      <div className="bg-green-500">
        <MoveDiagonal size={10} className="hidden group-hover:block" />
      </div>
    </div>
  )
}

export default WindowUtil
