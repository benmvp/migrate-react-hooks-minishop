import { useState, useEffect } from 'react'

/**
 * Custom hook that will maintain the dark mode choice,
 * initializing to the user's dark mode preference
 * @param {boolean} defaultIsDarkMode The default value dark mode setting
 * @returns {[boolean, (isDarkMode: boolean) => void]}
 */
const useDarkMode = (defaultIsDarkMode = false) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultIsDarkMode)

  useEffect(() => {
    // Within `useEffect` we can access `window.matchMedia`
    // to execute a media query to see which color scheme
    // is preferred. We then update the theme based on
    // this preference. This will only run one time on App
    // mount.
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      .matches

    setIsDarkMode(prefersDark)
  }, [])

  return [isDarkMode, setIsDarkMode]
}

export default useDarkMode
