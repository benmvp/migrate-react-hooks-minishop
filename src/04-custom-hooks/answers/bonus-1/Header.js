import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import THEMES from '../../themes.json'

const Switch = ({ value, onChange }) => (
  <div className="switch large">
    <input
      className="switch-input"
      id="dark-mode"
      type="checkbox"
      checked={value === 'dark'}
      onChange={(e) => onChange(e.target.checked ? 'dark' : 'light')}
    />
    <label className="switch-paddle" for="dark-mode">
      <span className="switch-active" aria-hidden="true">
        🌃
      </span>
      <span className="switch-inactive" aria-hidden="true">
        ☀️
      </span>
    </label>
  </div>
)

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: THEMES[theme].foreground }}>Giphy Search!</h1>
      <Switch value={theme} onChange={setTheme} />
    </header>
  )
}

export default Header
