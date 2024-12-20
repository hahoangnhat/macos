'use client'
import { getCurrentDateTime } from '@/utils'
import { AppleIcon, BatteryIcon, SearchIcon, SwitchIcon, WifiIcon } from '../Icons'
import { useLocale, useTranslations } from 'next-intl'
import { ELocale, macosItems } from '@/constants'
import { Dropdown } from '../Dropdown'
import { useState } from 'react'
import { IDropdown } from '@/interfaces'

interface IHeaderProps {
  utils: IDropdown[]
}

const Header = ({ utils }: IHeaderProps) => {
  const t = useTranslations()
  const locale = useLocale()

  const [isMenuActive, setMenuActive] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<number>(-1)

  return (
    <header className="relative flex justify-between bg-alabaster-50 bg-opacity-20 px-1 text-sm text-white">
      <div className="z-10 flex items-center text-sm">
        <Dropdown
          id={0}
          label={<AppleIcon className="h-4 w-4" />}
          items={macosItems(t)}
          isMenuActive={isMenuActive}
          setMenuActive={setMenuActive}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        {/* Application utils */}
        {utils.map((util: IDropdown, index: number) => (
          <Dropdown
            id={index + 1}
            key={util.id}
            label={util.label}
            items={util.items}
            isMenuActive={isMenuActive}
            setMenuActive={setMenuActive}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </div>

      <div className="flex items-center gap-5">
        <BatteryIcon className="h-5 w-5" />
        <WifiIcon className="h-4 w-4" />
        <SearchIcon className="h-5 w-5" />
        <SwitchIcon className="h-5 w-5" />
        <span>{getCurrentDateTime(locale as ELocale)}</span>
      </div>

      {isMenuActive && (
        <div
          className="absolute left-0 top-0 h-screen w-screen bg-transparent"
          onClick={() => {
            setMenuActive(false)
            setActiveItem(-1)
          }}
        ></div>
      )}
    </header>
  )
}

export default Header
