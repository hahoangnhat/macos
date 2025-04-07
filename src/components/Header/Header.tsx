'use client'
import { generateMacOsUtils, getCurrentDateTime } from '@/utils'
import { AppleIcon, BatteryIcon, SearchIcon, SwitchIcon, WifiIcon } from '../Icons'
import { useLocale, useTranslations } from 'next-intl'
import { EApplication, ELocale } from '@/constants'
import { Dropdown } from '../Dropdown'
import { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { IDropdown, IDropdownItem } from '@/interfaces'
import { useApplications } from '@/hooks'
import { useAppSelector } from '@/stores/hooks'

const Header = () => {
  const t = useTranslations()
  const locale = useLocale()
  const utils = useAppSelector((state) => state.application.applicationUtils)
  const { launchApp, forceQuitAll } = useApplications()

  const [isMenuActive, setMenuActive] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<string>('')

  const currentDateTime = useMemo(() => getCurrentDateTime(locale as ELocale), [locale])

  const resetMenu = () => {
    setMenuActive(false)
    setActiveItem('')
  }

  const handleOpenApp = useCallback(
    (appName: EApplication) => {
      launchApp(appName)
      resetMenu()
    },
    [launchApp],
  )

  const handleActiveMenu = (active: boolean) => setMenuActive(active)
  const handleActiveMenuItem = (id: string) => setActiveItem(id)

  const macosItems: IDropdownItem[] = useMemo(
    () => generateMacOsUtils(t, handleOpenApp),
    [handleOpenApp, t],
  )

  useEffect(() => {
    // Force quit all applications for the first visit
    forceQuitAll()
  }, [forceQuitAll])

  return (
    <header className="bg-alabaster-50/20 relative flex justify-between px-1 text-sm text-white">
      <div className="z-50 flex items-center text-xs">
        <Dropdown
          id="macos-1.0.0"
          label={<AppleIcon className="h-4 w-4" />}
          items={macosItems}
          isMenuActive={isMenuActive}
          handleActiveMenu={handleActiveMenu}
          activeItem={activeItem}
          handleActiveMenuItem={handleActiveMenuItem}
        />

        {/* Application utils */}
        {utils.map((util: IDropdown, index: number) => (
          <Dropdown
            id={util.id}
            key={util.id}
            label={util.label}
            items={util.items}
            isMenuActive={isMenuActive}
            handleActiveMenu={handleActiveMenu}
            activeItem={activeItem}
            handleActiveMenuItem={handleActiveMenuItem}
            className={classNames({ 'font-bold': index === 0 })}
          />
        ))}
      </div>

      <div className="flex items-center gap-5">
        <BatteryIcon className="h-5 w-5" />
        <WifiIcon className="h-4 w-4" />
        <SearchIcon className="h-5 w-5" />
        <SwitchIcon className="h-5 w-5" />
        <span>{currentDateTime}</span>
      </div>

      {isMenuActive && (
        <div
          className="absolute top-0 left-0 z-40 h-screen w-screen bg-transparent"
          onClick={resetMenu}
        ></div>
      )}
    </header>
  )
}

export default Header
