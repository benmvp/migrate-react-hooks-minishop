import React, { useEffect } from 'react'
import Page from './Page'
import useDarkMode from './useDarkMode'
import ThemeContext from './ThemeContext'
import THEMES from '../../themes.json'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode()
  const theme = isDarkMode ? 'dark' : 'light'

  // Since `setTheme` will be a new value any time
  // `App` is re-rendered. That should be infrequently
  // but if performance becomes a problem we can use
  // `useCallback` to get a memoized function
  const setTheme = (theme) => setIsDarkMode(theme === 'dark')

  useEffect(() => {
    // Within `useEffect` we have access to the DOM
    // and we'll set the body backgroundColor whenever
    // the theme changes
    document.body.style.backgroundColor = THEMES[theme].background
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  )
}

export default App
