import { useEffect } from "react"

const useClickedOutside = (ref: React.RefObject<unknown>, callback: (event: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener('mousedown', callback, true)
    return () => {
      document.removeEventListener('mousedown', callback, true)
    }
  }, [callback])
}

export default useClickedOutside