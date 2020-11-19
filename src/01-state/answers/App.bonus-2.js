import React, { useState } from 'react'
import PropTypes from 'prop-types'

const App = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery)
  const [upper, setUpper] = useState(false)

  return (
    <main>
      <h1>Giphy Search!</h1>

      <form>
        <input
          type="search"
          placeholder="Search Giphy"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {query && (
        <>
          <p style={upper ? { textTransform: 'uppercase' } : {}}>
            You are searching for <strong>{query}</strong> on Giphy.
          </p>
          <button
            type="button"
            className="button"
            onClick={() => setUpper((curUpper) => !curUpper)}
          >
            To {upper ? 'Normal' : 'Upper'}
          </button>
        </>
      )}
    </main>
  )
}
App.propTypes = {
  initialQuery: PropTypes.string,
}
App.defaultProps = {
  initialQuery: '',
}

export default App
