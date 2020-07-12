import React, { useState } from 'react'
import PropTypes from 'prop-types'

const App = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery)

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
