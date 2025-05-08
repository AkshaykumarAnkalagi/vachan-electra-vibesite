
import * as React from "react"

// Mobile breakpoint (below this is considered mobile)
const MOBILE_BREAKPOINT = 768
// Tablet breakpoint (below this is considered tablet)
const TABLET_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Check on mount
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    window.addEventListener("resize", checkIfMobile)
    
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean>(false)

  React.useEffect(() => {
    const checkIfTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
    }
    
    // Check on mount
    checkIfTablet()
    
    window.addEventListener("resize", checkIfTablet)
    
    return () => window.removeEventListener("resize", checkIfTablet)
  }, [])

  return isTablet
}

export function useDeviceType() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  
  if (isMobile) return 'mobile'
  if (isTablet) return 'tablet'
  return 'desktop'
}
