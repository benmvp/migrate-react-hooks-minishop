import React, { useContext } from 'react'
import { LocaleContext } from './contexts'
import I18N from './i18n.json'

const LocaleSwitcherHooks = () => {
  const { locale, setLocale } = useContext(LocaleContext)

  return (
    <label style={{ color: '#fefefe' }}>
      {I18N.changeLangHooks[locale]}
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="en_US">English (US)</option>
        <option value="es_ES">Español (España)</option>
      </select>
    </label>
  )
}

const LocaleSwitcherPreHooks = () => (
  <LocaleContext.Consumer>
    {({ locale, setLocale }) => (
      <label style={{ color: '#fefefe' }}>
        {I18N.changeLang[locale]}
        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value="en_US">English (US)</option>
          <option value="es_ES">Español (España)</option>
        </select>
      </label>
    )}
  </LocaleContext.Consumer>
)

const Footer = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <footer
      style={{
        backgroundColor: '#222',
        color: '#fefefe',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>{I18N.footer[locale]}</h1>
      <div style={{ width: 200, alignSelf: 'flex-end' }}>
        <LocaleSwitcherPreHooks />
        <hr />
        <LocaleSwitcherHooks />
      </div>
    </footer>
  )
}

export default Footer
