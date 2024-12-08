interface IAppleDropdownProps {
  button: React.ReactNode
  options: string[]
}

const Dropdown = ({ button, options }: IAppleDropdownProps) => {
  return (
    <div className="relative">
      {/* Active button */}
      <div className="peer">{button}</div>

      {/* Dropdown */}
      <div className="absolute top-full hidden translate-y-1.5 rounded-md bg-alabaster-50 bg-opacity-90 p-2 text-black peer-hover:block">
        {options.map((option: string, index: number) => (
          <span key={index}>{option}</span>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
