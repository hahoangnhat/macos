'use client'

import { AboutThisMac, SystemSettings } from '@/components'

const Home = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <AboutThisMac />
      <SystemSettings />
    </div>
  )
}

export default Home
