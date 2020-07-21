import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from './ThemeContext'
import THEMES from './themes.json'

const LIMITS = ['6', '12', '18', '24', '30']

const SearchForm = ({ query, limit, onQueryChange, onLimitChange }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{ maxWidth: 400, margin: '20px auto' }}>
      <input
        type="search"
        placeholder="Search Giphy"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <label style={{ color: THEMES[theme].foreground }}>
        # of Results
        <select onChange={(e) => onLimitChange(e.target.value)} value={limit}>
          {LIMITS.map((limit) => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func,
  onLimitChange: PropTypes.func,
}

export default SearchForm
