'use client'
import { getCurrentDateTime } from '@/utils'
import { AppleIcon, BatteryIcon, SearchIcon, SwitchIcon, WifiIcon } from '../Icons'
import { useLocale, useTranslations } from 'next-intl'
import { EApplication, ELocale } from '@/constants'
import { Dropdown } from '../Dropdown'
import { useCallback, useMemo, useState } from 'react'
import classNames from 'classnames'
import { DropdownButtonItem, FinderIcon } from '@/components'
import DropdownSubMenu from '@/components/Dropdown/DropdownSubMenu'
import { IDropdown, IDropdownItem } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'
import { useApplications } from '@/hooks'

interface IHeaderProps {
  utils: IDropdown[]
}

const Header = ({ utils }: IHeaderProps) => {
  const t = useTranslations()
  const locale = useLocale()
  const { launchApp } = useApplications()

  const [isMenuActive, setMenuActive] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<string>('')

  const handleOpenApp = useCallback(
    (appName: EApplication) => {
      launchApp(appName)
      setMenuActive(false)
      setActiveItem('')
    },
    [launchApp],
  )

  const macosItems: IDropdownItem[] = useMemo(
    () => [
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('macos.dropdown.about')}
            hasDivider
            onClick={() => handleOpenApp(EApplication.ABOUT_THIS_MAC)}
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('macos.dropdown.system_settings')}
            onClick={() => handleOpenApp(EApplication.SYSTEM_SETTINGS)}
          />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('macos.dropdown.app_store')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownSubMenu
            label={t('macos.dropdown.recent_items')}
            menuItems={[
              {
                id: uuidv4(),
                item: (
                  <DropdownButtonItem
                    label={
                      <div className="flex items-center gap-1">
                        <FinderIcon style={{ width: '14px', height: '14px' }} />
                        {t('finder.header.app_name')}
                      </div>
                    }
                    groupTitle={t('finder.header.dropdown.applications')}
                    hasDivider
                  />
                ),
              },
              {
                id: uuidv4(),
                item: <DropdownButtonItem label={t('finder.header.dropdown.clear_menu')} />,
              },
            ]}
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('macos.dropdown.force_quit')} shortcut="⌥⌘⎋" hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('macos.dropdown.sleep')} />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('macos.dropdown.restart')} />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('macos.dropdown.shutdown')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('macos.dropdown.lock_screen')} shortcut="⌃⌘Q" />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('macos.dropdown.log_out', { full_name: 'Hà Hoàng Nhật' })}
            shortcut="⇧⌘Q"
          />
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t],
  )

  return (
    <header className="bg-alabaster-50/20 relative flex justify-between px-1 text-sm text-white">
      <div className="z-50 flex items-center text-xs">
        <Dropdown
          id="macos-1.0.0"
          label={<AppleIcon className="h-4 w-4" />}
          items={macosItems}
          isMenuActive={isMenuActive}
          setMenuActive={setMenuActive}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        {/* Application utils */}
        {utils.map((util: IDropdown, index: number) => (
          <Dropdown
            id={util.id}
            key={util.id}
            label={util.label}
            items={util.items}
            isMenuActive={isMenuActive}
            setMenuActive={setMenuActive}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            className={classNames({ 'font-bold': index === 0 })}
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
          className="absolute top-0 left-0 z-40 h-screen w-screen bg-transparent"
          onClick={() => {
            setMenuActive(false)
            setActiveItem('')
          }}
        ></div>
      )}
    </header>
  )
}

export default Header
