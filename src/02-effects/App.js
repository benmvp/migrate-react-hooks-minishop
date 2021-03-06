import React, { Component /*, useState, useEffect*/ } from 'react'
import PropTypes from 'prop-types'
import { getResults } from '../api'

const LIMITS = ['6', '12', '18', '24', '30']

const SearchForm = ({ query, limit, onQueryChange, onLimitChange }) => (
  <div style={{ maxWidth: 400, margin: '20px auto' }}>
    <input
      type="search"
      placeholder="Search Giphy"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
    <label>
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

const Results = ({ results }) => {
  if (results.length === 0) {
    return null
  }

  return (
    <section>
      {results.map((item) => (
        <section
          key={item.id}
          className="card"
          style={{
            width: '300px',
            display: 'inline-block',
            marginRight: '16px',
          }}
        >
          <video src={item.previewUrl} alt={item.title} loop autoPlay />
          <section className="card-section">
            <h5>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>{' '}
              ({item.rating})
            </h5>
          </section>
        </section>
      ))}
    </section>
  )
}

// 👇🏾 Uncomment the function component to convert the class

// const App = ({ initialQuery, initialLimit }) => {
//   const [query, setQuery] = useState(initialQuery)
//   const [limit, setLimit] = useState(initialLimit)
//   const [results, setResults] = useState([])

//   // 👇🏾 Add `useEffect` to call `getResults` and `setResults`

//   return (
//     <main>
//       <h1>Giphy Search!</h1>

//       <SearchForm
//         query={query}
//         limit={limit}
//         onQueryChange={setQuery}
//         onLimitChange={setLimit}
//       />

//       <Results results={results} />
//     </main>
//   )
// }
// App.propTypes = {
//   initialQuery: PropTypes.string,
//   initialLimit: PropTypes.string,
// }
// App.defaultProps = {
//   initialQuery: '',
//   initialLimit: '12',
// }

class App extends Component {
  static propTypes = {
    initialQuery: PropTypes.string,
    initialLimit: PropTypes.string,
  }
  static defaultProps = {
    initialQuery: '',
    initialLimit: '12',
  }

  constructor(props) {
    super(props)

    this.state = {
      query: props.initialQuery,
      limit: props.initialLimit,
      results: [],
    }
  }

  // helper that does the fetch and state update
  // a separate method is needed because it's called
  // in both `componentDidMount` & `componentDidUpdate`
  fetchResults() {
    const { query, limit } = this.state

    getResults({ query, limit }).then(
      (results) => this.setState({ results }),
      (err) => {
        console.error(err)
      },
    )
  }

  componentDidMount() {
    // get results on mount
    this.fetchResults()
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, limit } = this.state

    // get new results when `query` or `limit` state values change
    if (prevState.query !== query || prevState.limit !== limit) {
      this.fetchResults()
    }
  }

  render() {
    return (
      <main>
        <h1>Giphy Search!</h1>

        <SearchForm
          query={this.state.query}
          limit={this.state.limit}
          onQueryChange={(query) => this.setState({ query })}
          onLimitChange={(limit) => this.setState({ limit })}
        />

        <Results results={this.state.results} />
      </main>
    )
  }
}

export default App
