import { DropdownButtonItem, DropdownSubMenu, FinderIcon } from '@/components'
import { EApplication } from '@/constants'
import { IDropdown, IDropdownItem, TTFunction } from '@/interfaces'
import {
  Clock9,
  Globe,
  File,
  Dock,
  CircleArrowDown,
  House,
  HardDrive,
  RadioTower,
  Cloud,
  FolderSymlink,
  Component,
  UtensilsCrossed,
} from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

const generateFinderUtils = (t: TTFunction): IDropdown[] => [
  {
    id: uuidv4(),
    label: t('finder.header.app_name'),
    items: [
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.about')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.settings')}
            shortcut="⌘,"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.empty_trash')}
            shortcut="⇧⌘⌫"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.services')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.hide_finder')} shortcut="⌘H" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.hide_others')} shortcut="⌥⌘H" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.show_all')} />,
      },
    ],
  },
  {
    id: uuidv4(),
    label: t('finder.header.utils.file'),
    items: [
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.new_finder_window')} shortcut="⌘N" />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.new_folder')} shortcut="⇧⌘N" />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.new_folder_with_selection')}
            shortcut="⌃⌘N"
          />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.new_smart_folder')} />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.new_tab')} shortcut="⌘T" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.open')} shortcut="⌘O" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.open_with')} />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.close_window')}
            shortcut="⌘W"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.get_info')} shortcut="⌘I" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.rename')} />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.compress')} />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.duplicate')} shortcut="⌘D" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.make_alias')} shortcut="⌃⌘A" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.quick_look')} shortcut="⌘Y" />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.print')} shortcut="⌘P" hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.share')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.show_in_enclosing_folder')}
            shortcut="⌘R"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.add_to_dock')}
            shortcut="⌃⇧⌘T"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.move_to_trash')} shortcut="⌘⌫" />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.eject')} shortcut="⌘E" hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.tags')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.find')} shortcut="⌘F" />,
      },
    ],
  },
  {
    id: uuidv4(),
    label: t('finder.header.utils.edit'),
    items: [
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.cut')} shortcut="⌘X" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.copy')} shortcut="⌘C" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.paste')} shortcut="⌘V" />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.select_all')}
            shortcut="⌘A"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.show_clipboard')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.autofill')} />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.start_dictation')}
            shortcut={
              <div className="flex items-center">
                <Globe size={12} strokeWidth={2} />
                <span>D</span>
              </div>
            }
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.emoji_and_symbols')}
            shortcut={
              <div className="flex items-center">
                <Globe size={12} strokeWidth={2} />
                <span>E</span>
              </div>
            }
          />
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    label: t('finder.header.utils.view'),
    items: [
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.as_icons')} shortcut="⌘1" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.as_list')} shortcut="⌘2" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.as_columns')} shortcut="⌘3" />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.as_gallery')}
            shortcut="⌘4"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.use_groups')} shortcut="⌃⌘O" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.sort_by')} />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.clean_up')} />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.clean_up_by')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.show_tab_bar')} shortcut="⇧⌘T" />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.show_all_tabs')}
            shortcut="⇧⌘\"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.hide_sidebar')} shortcut="⌃⌘S" />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.show_preview')}
            shortcut="⇧⌘P"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.hide_toolbar')} shortcut="⌥⌘T" />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.show_path_bar')} shortcut="⌥⌘P" />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.show_status_bar')}
            shortcut="⌘/"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.customize_toolbar')} hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.show_view_options')} shortcut="⌘J" />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.show_preview_options')} hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.enter_full_screen')}
            shortcut={
              <div className="flex items-center">
                <Globe size={12} strokeWidth={2} />
                <span>F</span>
              </div>
            }
          />
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    label: t('finder.header.utils.go'),
    items: [
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.back')} shortcut="⌘[" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.forward')} shortcut="⌘]" />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.enclosing_folder')}
            shortcut="⌘↑"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <Clock9 size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.recent')}</span>
              </div>
            }
            shortcut="⇧⌘F"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <File size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.documents')}</span>
              </div>
            }
            shortcut="⇧⌘O"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <Dock size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.desktop')}</span>
              </div>
            }
            shortcut="⇧⌘D"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <CircleArrowDown size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.downloads')}</span>
              </div>
            }
            shortcut="⇧⌘L"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <House size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.home')}</span>
              </div>
            }
            shortcut="⇧⌘H"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <HardDrive size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.computer')}</span>
              </div>
            }
            shortcut="⇧⌘C"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <RadioTower size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.airdrop')}</span>
              </div>
            }
            shortcut="⇧⌘R"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <Globe size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.network')}</span>
              </div>
            }
            shortcut="⇧⌘K"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <Cloud size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.icloud_drive')}</span>
              </div>
            }
            shortcut="⇧⌘I"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <FolderSymlink size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.shared')}</span>
              </div>
            }
            shortcut="⇧⌘S"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <Component size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.applications')}</span>
              </div>
            }
            shortcut="⇧⌘A"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={
              <div className="flex items-center gap-2">
                <UtensilsCrossed size={14} strokeWidth={1.5} />
                <span>{t('finder.header.dropdown.utilities')}</span>
              </div>
            }
            shortcut="⇧⌘U"
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.recent_folders')} hasDivider />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.go_to_folder')} shortcut="⇧⌘G" />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.connect_to_server')} shortcut="⌘K" />
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    label: t('finder.header.utils.window'),
    items: [
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.minimize')} shortcut="⌘M" />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.zoom')} />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.fill')}
            shortcut={
              <div className="flex items-center">
                <span>⌃</span>
                <Globe size={14} strokeWidth={1.5} />
                <span>F</span>
              </div>
            }
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.center')}
            shortcut={
              <div className="flex items-center">
                <span>⌃</span>
                <Globe size={14} strokeWidth={1.5} />
                <span>C</span>
              </div>
            }
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.move_and_resize')} />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.full_screen_tile')} hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.remove_window_from_set')}
            hasDivider
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.cycle_through_windows')}
            shortcut="⌘`"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.show_progress_window')} hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.bring_all_to_front')} hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem
            label={t('finder.header.dropdown.show_previous_tab')}
            shortcut="⌃⇧⇥"
          />
        ),
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.show_next_tab')} shortcut="⌃⇥" />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.move_tab_to_new_window')} />,
      },
      {
        id: uuidv4(),
        item: (
          <DropdownButtonItem label={t('finder.header.dropdown.merge_all_windows')} hasDivider />
        ),
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.shared')} />,
      },
    ],
  },
  {
    id: uuidv4(),
    label: t('finder.header.utils.help'),
    items: [
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.mac_user_guide')} />,
      },
      {
        id: uuidv4(),
        item: <DropdownButtonItem label={t('finder.header.dropdown.tips_for_your_mac')} />,
      },
    ],
  },
]

const generateMacOsUtils = (
  t: TTFunction,
  handleOpenApp: (appName: EApplication) => void,
): IDropdownItem[] => [
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
    item: <DropdownButtonItem label={t('macos.dropdown.force_quit')} shortcut="⌥⌘⎋" hasDivider />,
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
]

export { generateFinderUtils, generateMacOsUtils }
