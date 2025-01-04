import classNames from 'classnames'
import { InputHTMLAttributes, ReactNode } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  showStartIcon?: ReactNode
  showEndIcon?: ReactNode
}

const Input = ({ showStartIcon, showEndIcon, className, ...props }: IInputProps) => {
  return (
    <div className="relative flex">
      {showStartIcon && (
        <div className="absolute left-0 top-0 translate-x-1/3 translate-y-1/3">{showStartIcon}</div>
      )}
      <input
        className={classNames(
          'rounded-md border border-transparent bg-alabaster-300 bg-opacity-50 p-1 px-6 text-xs focus-visible:border-alabaster-400 focus-visible:outline-none',
          className,
        )}
        {...props}
      />
      {showEndIcon && (
        <div className="absolute right-0 top-0 -translate-x-1/3 translate-y-1/3">{showEndIcon}</div>
      )}
    </div>
  )
}

export default Input
