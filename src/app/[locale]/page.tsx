import { ROUTES } from '@/constants'
import { redirect } from 'next/navigation'

const LocalePage = () => redirect(ROUTES.FINDER)

export default LocalePage
