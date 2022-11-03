import { MutableRefObject, useEffect, useRef } from 'react'

export function useChatScroll<T>(dep: T): MutableRefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>()
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep])
  //@ts-ignore
  return ref
}