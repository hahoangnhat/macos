import classNames from 'classnames'
import { InputHTMLAttributes, ReactNode } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  showStartIcon?: ReactNode
  showEndIcon?: ReactNode
}

const Input = ({ className, ...props }: IInputProps) => {
  return (
    <div className="flex">
      <input
        className={classNames(
          'rounded-md border border-transparent bg-alabaster-300 bg-opacity-50 p-1 text-xs focus-visible:border-alabaster-400 focus-visible:outline-none',
          className,
        )}
        {...props}
      />
    </div>
  )
}

export default Input
