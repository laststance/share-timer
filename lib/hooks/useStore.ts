import { useState, useEffect } from 'react'

/**
 * Custom hook for safely accessing Zustand stores with persist middleware in Next.js SSR.
 * Prevents hydration errors by deferring state access until after client-side hydration.
 * 
 * @param store - Zustand store hook
 * @param callback - Selector function to extract specific state
 * @returns Selected state value (undefined during SSR/initial render)
 * 
 * @example
 * ```tsx
 * const bears = useStore(useBearStore, (state) => state.bears)
 * ```
 */
const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export default useStore
