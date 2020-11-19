import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import Nav from '../../Nav'

const getRandomCount = () => {
  const count = Math.ceil(Math.random() * 10)

  // log how many times we're calculating the random number
  console.log(count)

  return count
}

const CounterHooks = () => {
  // Multiple calls to `useState` for multiple pieces of state

  // Use lazy initializer function to only call `getRandomCount` once
  const [count, setCount] = useState(() => getRandomCount())
  const [value, setValue] = useState('')

  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button
          className="button"
          onClick={() => setCount((curCount) => curCount - 1)}
        >
          -
        </button>
        <button
          className="button"
          onClick={() => setCount((curCount) => curCount + 1)}
        >
          +
        </button>
      </div>
      <label>
        Name
        <input
          type="text"
          placeholder="Enter your name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  )
}

class CounterClass extends Component {
  state = {
    count: getRandomCount(),
    value: '',
  }

  render() {
    const { count, value } = this.state

    return (
      <div>
        <p>Count: {count}</p>
        <div>
          <button
            className="button"
            onClick={() =>
              this.setState((curState) => ({ count: curState.count - 1 }))
            }
          >
            -
          </button>
          <button
            className="button"
            onClick={() =>
              this.setState((curState) => ({ count: curState.count + 1 }))
            }
          >
            +
          </button>
        </div>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter your name"
            value={value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </label>
      </div>
    )
  }
}

const ToggleHooks = ({ initialOn }) => {
  const [on, setOn] = useState(initialOn)

  // use updater function since new state is computed
  // from previous state
  const handleClick = () => setOn((curOn) => !curOn)

  return (
    <button onClick={handleClick} className="button">
      {on ? 'ON' : 'OFF'}
    </button>
  )
}
ToggleHooks.propTypes = {
  initialOn: PropTypes.bool,
}
ToggleHooks.defaultProps = {
  initialOn: true,
}

class ToggleClass extends Component {
  static propTypes = {
    initialOn: PropTypes.bool,
  }
  static defaultProps = {
    initialOn: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      on: props.initialOn,
    }
  }

  handleClick = () => {
    // use updater function since new state is computed
    // from previous state
    this.setState((curState) => ({
      on: !curState.on,
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick} className="button">
        {this.state.on ? 'ON' : 'OFF'}
      </button>
    )
  }
}

const App = () => (
  <main>
    <Nav crumbs={[{ to: '/step-1', children: 'Step 1' }, 'Teach']} />
    <div className="grid-x grid-margin-x">
      <div className="cell small-6">
        <h3>Classes</h3>
      </div>
      <div className="cell small-6">
        <h3>Hooks</h3>
      </div>
    </div>
    <div className="grid-x grid-margin-x" style={{ marginTop: '2rem' }}>
      <div className="cell small-6">
        <ToggleClass initialOn={false} />
      </div>
      <div className="cell small-6">
        <ToggleHooks initialOn />
      </div>
    </div>
    <div className="grid-x grid-margin-x" style={{ marginTop: '4rem' }}>
      <div className="cell small-6">
        <CounterClass />
      </div>
      <div className="cell small-6">
        <CounterHooks />
      </div>
    </div>
  </main>
)

export default App
