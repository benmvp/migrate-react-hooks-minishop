import React, { useState } from 'react'
import Page from './Page'
import ThemeContext from './ThemeContext'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  )
}

export default App
