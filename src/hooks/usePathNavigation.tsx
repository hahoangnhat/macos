import { useMemo, useState } from 'react'

interface IUsePathNavigation {
  historyInit: string
}

const usePathNavigation = ({ historyInit }: IUsePathNavigation) => {
  const [history, setHistory] = useState<string[]>([historyInit])
  const [index, setIndex] = useState<number>(0)
  const currentPath = useMemo(() => (history.length > 0 ? history[index] : ''), [history, index])

  const navigate = (path: string) => {
    const newHistory = history.slice(0, index + 1)
    // Remove path if it existed
    if (newHistory.includes(path)) {
      newHistory.splice(newHistory.indexOf(path), 1)
    }
    newHistory.push(path)
    setHistory(newHistory)
    setIndex(newHistory.length - 1)
  }

  const back = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1)
    }
  }

  const forward = () => {
    if (history.length && index < history.length) {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return {
    currentPath,
    navigate,
    back,
    forward,
    canGoBack: index > 0,
    canGoForward: history.length && index < history.length - 1,
  }
}

export default usePathNavigation
