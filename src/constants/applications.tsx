const enum EApplication {
  NONE = '',
  FINDER = 'Finder',
  ABOUT_THIS_MAC = 'About This Mac',
  SYSTEM_SETTINGS = 'System Settings',
}

const enum EApplicationActionType {
  OPEN = 'open',
  CLOSE = 'close',
  ACTIVATE = 'activate',
  RESET = 'reset',
}

const ESystemSettingItem = {
  USER: 'user',
  GENERAL: 'general',
}

export { EApplication, ESystemSettingItem, EApplicationActionType }
