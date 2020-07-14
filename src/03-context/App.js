import React, { useState } from 'react'
import Page from './Page'
import ThemeContext from './ThemeContext'

const App = () => {
  const [theme, setTheme] = useState('light')

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
