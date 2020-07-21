import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import SearchForm from './SearchForm'
import Results from './Results'
import useGiphy from './useGiphy'
import ThemeContext from './ThemeContext'
import THEMES from '../themes.json'

const Page = ({ initialQuery, initialLimit }) => {
  const { theme } = useContext(ThemeContext)
  const [query, setQuery] = useState(initialQuery)
  const [limit, setLimit] = useState(initialLimit)
  const results = useGiphy(query, limit)

  return (
    <main style={{ backgroundColor: THEMES[theme].background }}>
      <Header />
      <SearchForm
        query={query}
        limit={limit}
        onQueryChange={setQuery}
        onLimitChange={setLimit}
      />
      <Results results={results} />
    </main>
  )
}
Page.propTypes = {
  initialQuery: PropTypes.string,
  initialLimit: PropTypes.string,
}
Page.defaultProps = {
  initialQuery: '',
  initialLimit: '12',
}

export default Page
