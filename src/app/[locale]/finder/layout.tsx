import { Header } from '@/components'

const FinderLayout = ({ children }: { children: React.ReactNode }) => {
  const utils = ['File', 'Edit', 'View', 'Go', 'Window', 'Help']

  return (
    <>
      <Header appName="Finder" utils={utils} />
      {children}
    </>
  )
}

export default FinderLayout
