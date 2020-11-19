import React, { useState, useEffect } from 'react'
import Page from './Page'
import ThemeContext from './ThemeContext'
import THEMES from './themes.json'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Within `useEffect` we have access to the DOM
    // and we'll set the body backgroundColor whenever
    // the theme changes
    document.body.style.backgroundColor = THEMES[theme].background
  }, [theme])

  return (
    // The theme context value is an object with
    // the theme ("light" or "dark") and a function
    // to update the theme
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  )
}

export default App
