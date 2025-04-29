
import * as React from "react"

// Mobile breakpoint (below this is considered mobile)
const MOBILE_BREAKPOINT = 768
// Tablet breakpoint (below this is considered tablet)
const TABLET_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkIfTablet = () => {
      const width = window.innerWidth
      return width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT
    }
    
    const onChange = () => {
      setIsTablet(checkIfTablet())
    }
    
    window.addEventListener("resize", onChange)
    setIsTablet(checkIfTablet())
    
    return () => window.removeEventListener("resize", onChange)
  }, [])

  return !!isTablet
}

export function useDeviceType() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  
  if (isMobile) return 'mobile'
  if (isTablet) return 'tablet'
  return 'desktop'
}
