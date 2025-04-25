import { ESystemSettingItem } from '@/constants'
import { ISystemSettingItem, TTFunction } from '@/interfaces'
import { Cog } from 'lucide-react'

const generateSystemSettingItems = (t: TTFunction): ISystemSettingItem[] => [
  {
    id: ESystemSettingItem.GENERAL,
    icon: <Cog className="h-4 w-4" />,
    name: t('system_settings.label.general'),
    className: 'mt-2',
  },
]

export { generateSystemSettingItems }
