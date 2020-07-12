import React, { Component /*, useState*/ } from 'react'
import PropTypes from 'prop-types'

// 👇🏾 Uncomment the function component to convert the class

// const App = ({ initialQuery }) => {
//   // 👈🏾 define `query` state variable with `useState`

//   return (
//     <main>
//       <h1>Giphy Search!</h1>

//       {/* 👇🏾 migrate UI from class using & updating `query` variable */}

//     </main>
//   )
// }

class App extends Component {
  static propTypes = {
    initialQuery: PropTypes.string,
  }

  static defaultProps = {
    initialQuery: '',
  }

  constructor(props) {
    super(props)

    this.state = {
      query: props.initialQuery,
    }
  }

  render() {
    return (
      <main>
        <h1>Giphy Search!</h1>

        <form>
          <input
            type="search"
            placeholder="Search Giphy"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
        </form>
      </main>
    )
  }
}

export default App
