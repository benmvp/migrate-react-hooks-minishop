import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

const getRandomCount = () => {
  const count = Math.ceil(Math.random() * 10)

  // log how many times we're calculating the random number
  console.log(count)

  return count
}

const CounterHooks = () => {
  const [count, setCount] = useState(() => getRandomCount())
  const [value, setValue] = useState('')

  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button
          type="button"
          className="button"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <button
          type="button"
          className="button"
          onClick={() => setCount((prevCount) => prevCount + 1)}
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
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <div>
          <button
            type="button"
            className="button"
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count - 1 }))
            }
          >
            -
          </button>
          <button
            type="button"
            className="button"
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count + 1 }))
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
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </label>
      </div>
    )
  }
}

const ToggleHooks = ({ initialOn }) => {
  const [on, setOn] = useState(initialOn)

  const handleClick = () => setOn((prevOn) => !prevOn)

  return (
    <button type="button" className="button success" onClick={handleClick}>
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
    this.setState((prevState) => ({
      on: !prevState.on,
    }))
  }

  render() {
    return (
      <button type="button" className="button" onClick={this.handleClick}>
        {this.state.on ? 'ON' : 'OFF'}
      </button>
    )
  }
}

const App = () => (
  <main>
    <div className="grid-x grid-margin-x">
      <div className="cell small-6">
        <ToggleClass initialOn={false} />
      </div>
      <div className="cell small-6">
        <ToggleHooks initialOn />
      </div>
    </div>
    <div className="grid-x grid-margin-x">
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
