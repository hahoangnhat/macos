import { TTFunction, ISystemSettingItem } from '@/interfaces'
import { Cog } from 'lucide-react'

const enum EApplication {
  FINDER = 'Finder',
  ABOUT_THIS_MAC = 'About This Mac',
  SYSTEM_SETTINGS = 'System Settings',
}

const ESystemSettingItem = {
  USER: 'user',
  GENERAL: 'general',
}

const generateSystemSettingItems = (t: TTFunction): ISystemSettingItem[] => [
  {
    id: ESystemSettingItem.GENERAL,
    icon: <Cog className="h-4 w-4" />,
    name: t('system_settings.label.general'),
    className: 'mt-2',
  },
]

export { EApplication, ESystemSettingItem, generateSystemSettingItems }
