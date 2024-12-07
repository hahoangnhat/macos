interface IAppleDropdownProps {
  button: React.ReactNode
  options: string[]
}

const Dropdown = ({ button, options }: IAppleDropdownProps) => {
  return (
    <div className="relative">
      {/* Active button */}
      {button}

      {/* Dropdown */}
      {options.map((option: string, index: number) => (
        <span key={index}>{option}</span>
      ))}
    </div>
  )
}

export default Dropdown
