import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import SearchForm from './SearchForm'
import Results from './Results'
import ThemeContext from './ThemeContext'
import THEMES from './themes.json'
import { getResults } from './api'

const Page = ({ initialQuery, initialLimit }) => {
  const { theme } = useContext(ThemeContext)
  const [query, setQuery] = useState(initialQuery)
  const [limit, setLimit] = useState(initialLimit)

  // 👇🏾👇🏾 extract to `useGiphy.js` 👇🏾👇🏾
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const results = await getResults({
          query,
          limit,
        })

        setResults(results)
      } catch (err) {
        console.error(err)
      }
    }

    fetchResults()
  }, [query, limit])
  // 👆🏾👆🏾 extract to `useGiphy.js` 👆🏾👆🏾

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
  initialLimit: PropTypes.number,
}
Page.defaultProps = {
  initialQuery: '',
  initialLimit: 12,
}

export default Page
