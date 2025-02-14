import classNames from 'classnames'
import { InputHTMLAttributes, ReactNode } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  showStartIcon?: ReactNode
  showEndIcon?: ReactNode
}

const Input = ({ showStartIcon, showEndIcon, className, ...props }: IInputProps) => {
  return (
    <div className="cancel-draggable relative flex w-full">
      {showStartIcon && (
        <div className="absolute top-0 left-0 translate-x-1/3 translate-y-1/3">{showStartIcon}</div>
      )}
      <input
        className={classNames(
          'border-alabaster-300 bg-alabaster-300/50 focus-visible:border-alabaster-400 w-full rounded-md border p-1 text-xs focus-visible:outline-hidden',
          { 'pl-6': showStartIcon, 'pr-6': showEndIcon },
          className,
        )}
        {...props}
      />
      {showEndIcon && (
        <div className="absolute top-0 right-0 -translate-x-1/3 translate-y-1/3">{showEndIcon}</div>
      )}
    </div>
  )
}

export default Input
