import { TTFunction } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'
import {
  Bluetooth,
  Cog,
  Dock,
  Globe,
  PersonStanding,
  Search,
  SunMedium,
  SunSnow,
  ToggleLeft,
  Wallpaper,
  Wifi,
  Zap,
  Image as ImageIcon,
  BellDot,
  Volume2,
  Moon,
  Clock2,
  Lock as LockIcon,
  Hand,
  KeyRound,
  UsersRound,
  AtSign,
} from 'lucide-react'

const enum EApplication {
  FINDER = 'Finder',
  ABOUT_THIS_MAC = 'About This Mac',
  SYSTEM_SETTINGS = 'System Settings',
}

const systemSettingItems = (t: TTFunction) => [
  {
    id: uuidv4(),
    icon: <Wifi className="h-4 w-4" />,
    name: t('system_settings.label.wifi'),
    className: 'mt-2',
  },
  {
    id: uuidv4(),
    icon: <Bluetooth className="h-4 w-4" />,
    name: t('system_settings.label.bluetooth'),
  },
  {
    id: uuidv4(),
    icon: <Globe className="h-4 w-4" />,
    name: t('system_settings.label.network'),
  },
  {
    id: uuidv4(),
    icon: <Zap className="h-4 w-4" />,
    name: t('system_settings.label.energy'),
  },
  {
    id: uuidv4(),
    icon: <Cog className="h-4 w-4" />,
    name: t('system_settings.label.general'),
    className: 'mt-2',
  },
  {
    id: uuidv4(),
    icon: <PersonStanding className="h-4 w-4" />,
    name: t('system_settings.label.accessibility'),
  },
  {
    id: uuidv4(),
    icon: <SunSnow className="h-4 w-4" />,
    name: t('system_settings.label.appearance'),
  },
  {
    id: uuidv4(),
    icon: <ToggleLeft className="h-4 w-4" />,
    name: t('system_settings.label.control_center'),
  },
  {
    id: uuidv4(),
    icon: <Dock className="h-4 w-4" />,
    name: t('system_settings.label.desktop_and_dock'),
  },
  {
    id: uuidv4(),
    icon: <SunMedium className="h-4 w-4" />,
    name: t('system_settings.label.displays'),
  },
  {
    id: uuidv4(),
    icon: <Wallpaper className="h-4 w-4" />,
    name: t('system_settings.label.screen_saver'),
  },
  {
    id: uuidv4(),
    icon: <Search className="h-4 w-4" />,
    name: t('system_settings.label.spotlight'),
  },
  {
    id: uuidv4(),
    icon: <ImageIcon className="h-4 w-4" />,
    name: t('system_settings.label.wallpaper'),
  },
  {
    id: uuidv4(),
    icon: <BellDot className="h-4 w-4" />,
    name: t('system_settings.label.notifications'),
    className: 'mt-2',
  },
  { id: uuidv4(), icon: <Volume2 className="h-4 w-4" />, name: t('system_settings.label.sound') },
  {
    id: uuidv4(),
    icon: <Moon className="h-4 w-4" />,
    name: t('system_settings.label.focus'),
  },
  {
    id: uuidv4(),
    icon: <Clock2 className="h-4 w-4" />,
    name: t('system_settings.label.screen_time'),
  },
  {
    id: uuidv4(),
    icon: <LockIcon className="h-4 w-4" />,
    name: t('system_settings.label.lock_screen'),
    className: 'mt-2',
  },
  {
    id: uuidv4(),
    icon: <Hand className="h-4 w-4" />,
    name: t('system_settings.label.privacy_and_security'),
  },
  {
    id: uuidv4(),
    icon: <KeyRound className="h-4 w-4" />,
    name: t('system_settings.label.login_password'),
  },
  {
    id: uuidv4(),
    icon: <UsersRound className="h-4 w-4" />,
    name: t('system_settings.label.users_and_groups'),
  },
  {
    id: uuidv4(),
    icon: <AtSign className="h-4 w-4" />,
    name: t('system_settings.label.internet_accounts'),
  },
]

export { EApplication, systemSettingItems }
