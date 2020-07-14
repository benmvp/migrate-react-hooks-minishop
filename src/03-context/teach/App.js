import React, { useState } from 'react'
import { LocaleContext } from './contexts'
import Layout from './Layout'

const App = () => {
  const [locale, setLocale] = useState('en_US')

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Layout />
    </LocaleContext.Provider>
  )
}

export default App
