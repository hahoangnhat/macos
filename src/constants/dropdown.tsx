import { DropdownItem } from '@/components'
import { IDropdown, IDropdownItem, TTFunction } from '@/interfaces'

const macosItems = (t: TTFunction): IDropdownItem[] => [
  {
    id: 1,
    item: <DropdownItem label={t('macos.dropdown.about')} hasDivider />,
  },
  {
    id: 2,
    item: <DropdownItem label={t('macos.dropdown.system_settings')} />,
  },
  {
    id: 3,
    item: <DropdownItem label={t('macos.dropdown.app_store')} hasDivider />,
  },
  {
    id: 4,
    item: <DropdownItem label={t('macos.dropdown.recent_items')} hasDivider />,
  },
  {
    id: 5,
    item: <DropdownItem label={t('macos.dropdown.force_quit')} shortcut="⌥⌘⎋" hasDivider />,
  },
  {
    id: 6,
    item: <DropdownItem label={t('macos.dropdown.sleep')} />,
  },
  {
    id: 7,
    item: <DropdownItem label={t('macos.dropdown.restart')} />,
  },
  {
    id: 8,
    item: <DropdownItem label={t('macos.dropdown.shutdown')} hasDivider />,
  },
  {
    id: 9,
    item: <DropdownItem label={t('macos.dropdown.lock_screen')} shortcut="⌃⌘Q" />,
  },
  {
    id: 10,
    item: (
      <DropdownItem
        label={t('macos.dropdown.log_out', { full_name: 'Hà Hoàng Nhật' })}
        shortcut="⇧⌘Q"
      />
    ),
  },
]

const finderUtils = (t: TTFunction): IDropdown[] => [
  {
    id: 1,
    label: t('finder.header.app_name'),
    items: [],
  },
  {
    id: 2,
    label: t('finder.header.utils.file'),
    items: [],
  },
  {
    id: 3,
    label: t('finder.header.utils.edit'),
    items: [],
  },
  {
    id: 4,
    label: t('finder.header.utils.view'),
    items: [],
  },
  {
    id: 5,
    label: t('finder.header.utils.go'),
    items: [],
  },
  {
    id: 6,
    label: t('finder.header.utils.window'),
    items: [],
  },
  {
    id: 7,
    label: t('finder.header.utils.help'),
    items: [],
  },
]

export { macosItems, finderUtils }
