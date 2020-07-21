import React, { useState } from 'react'
import { LocaleContext } from './contexts'
import Layout from './Layout'
import Nav from '../../Nav'

const App = () => {
  const [locale, setLocale] = useState('en_US')

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Nav crumbs={[{ to: '/step-3', children: 'Step 3' }, 'Teach']} />
      <Layout />
    </LocaleContext.Provider>
  )
}

export default App
