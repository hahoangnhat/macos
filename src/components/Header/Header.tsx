import { getCurrentDateTime } from '@/utils'
import { AppleIcon, BatteryIcon, SearchIcon, SwitchIcon, WifiIcon } from '../Icons'
import { useLocale } from 'next-intl'
import { ELocale } from '@/constants'

interface IHeaderProps {
  appName: string
  utils: string[]
}

const Header = ({ appName, utils }: IHeaderProps) => {
  const locale = useLocale()

  return (
    <header className="flex justify-between bg-hint-of-red-50 bg-opacity-20 px-5 py-1 text-white">
      <div className="flex items-center gap-5 text-sm">
        <AppleIcon className="h-4 w-4 text-white" />

        {/* Application utils */}
        <span className="font-semibold">{appName}</span>
        {utils.map((util: string, index: number) => (
          <span key={index}>{util}</span>
        ))}
      </div>

      <div className="flex items-center gap-5 text-sm">
        <BatteryIcon className="h-5 w-5 text-white" />
        <WifiIcon className="h-4 w-4 text-white" />
        <SearchIcon className="h-5 w-5 text-white" />
        <SwitchIcon className="h-5 w-5 text-white" />
        <span>{getCurrentDateTime(locale as ELocale)}</span>
      </div>
    </header>
  )
}

export default Header
