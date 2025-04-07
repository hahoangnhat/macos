import { Dock, Header } from '@/components'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <main className="relative h-0 grow">
        {children}
        <div className="absolute bottom-2 flex w-full justify-center">
          <Dock />
        </div>
      </main>
    </div>
  )
}

export default HomeLayout
