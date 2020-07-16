import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import THEMES from '../../themes.json'

/**
 * Custom hook that reads theme context and returns
 * the theme data
 * @returns {{ background: string, foreground: string }}
 */
const useTheme = () => {
  const { theme } = useContext(ThemeContext)

  return THEMES[theme]
}

export default useTheme
