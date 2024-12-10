'use client'
import { getCurrentDateTime } from '@/utils'
import { AppleIcon, BatteryIcon, SearchIcon, SwitchIcon, WifiIcon } from '../Icons'
import { useLocale, useTranslations } from 'next-intl'
import { ELocale } from '@/constants'
import { Dropdown } from '../Dropdown'
import { useState } from 'react'
import { IDropdownOptionProps } from '@/interfaces'
import classNames from 'classnames'

interface IHeaderProps {
  utils: IDropdownOptionProps[]
}

const Header = ({ utils }: IHeaderProps) => {
  const t = useTranslations()
  const locale = useLocale()

  const macosOptions: IDropdownOptionProps[] = [
    {
      id: 1,
      label: t('macos.dropdown.about'),
      className: 'border-b border-alabaster-400 pb-1',
    },
    {
      id: 2,
      label: t('macos.dropdown.system_settings'),
    },
  ]

  const [active, setActive] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<number>(-1)

  return (
    <header className="relative flex justify-between bg-alabaster-50 bg-opacity-20 px-1 text-sm text-white">
      <div className="z-10 flex items-center text-sm">
        <Dropdown
          id={0}
          button={<AppleIcon className="h-4 w-4" />}
          options={macosOptions}
          active={active}
          setActive={setActive}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        {/* Application utils */}
        {utils.map((util: IDropdownOptionProps, index: number) => (
          <Dropdown
            id={index + 1}
            key={util.id}
            button={<span>{util.label}</span>}
            options={macosOptions}
            active={active}
            setActive={setActive}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            className={classNames({
              'font-semibold': util.isAppName,
            })}
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

      {active && (
        <div
          className="absolute left-0 top-0 h-screen w-screen bg-transparent"
          onClick={() => {
            setActive(false)
            setActiveItem(-1)
          }}
        ></div>
      )}
    </header>
  )
}

export default Header
