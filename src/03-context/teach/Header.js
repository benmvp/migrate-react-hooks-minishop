import React from 'react'
import { LocaleContext } from './contexts'
import I18N from './i18n.json'

const Header = () => (
  <LocaleContext.Consumer>
    {({ locale }) => (
      <header
        style={{
          padding: '2rem',
          backgroundColor: '#1779ba',
          color: '#fefefe',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>{I18N.header[locale]}</h1>
      </header>
    )}
  </LocaleContext.Consumer>
)

export default Header
