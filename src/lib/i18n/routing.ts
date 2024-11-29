import { ELocale } from '@/constants'
import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: Object.values(ELocale),
  defaultLocale: ELocale.EN,
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
