import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Nav from '../../Nav'

const ClockHooks = ({ tickAmount }) => {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, tickAmount)

    return () => {
      clearInterval(intervalId)
    }
  }, [tickAmount])

  return <p>The time is {time.toLocaleTimeString()}.</p>
}
ClockHooks.propTypes = {
  tickAmount: PropTypes.number,
}
ClockHooks.defaultProps = {
  tickAmount: 1000,
}

class ClockClass extends Component {
  static propTypes = {
    tickAmount: PropTypes.number,
  }
  static defaultProps = {
    tickAmount: 1000,
  }

  constructor(props) {
    super(props)

    this.state = {
      time: new Date(),
    }
  }

  setup() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() })
    }, this.props.tickAmount)
  }

  cleanup() {
    clearInterval(this.intervalId)
  }

  componentDidMount() {
    this.setup()
  }

  componentDidUpdate(prevProps) {
    if (this.props.tickAmount !== prevProps.tickAmount) {
      this.cleanup()
      this.setup()
    }
  }

  componentWillUnmount() {
    this.cleanup()
  }

  render() {
    return <p>The time is {this.state.time.toLocaleTimeString()}.</p>
  }
}

const getRandomCount = () => Math.ceil(Math.random() * 10)

const CounterHooks = ({ label }) => {
  const [count, setCount] = useState(
    () =>
      Number.parseInt(window.localStorage.getItem('count')) || getRandomCount(),
  )

  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  return (
    <div>
      <button
        type="button"
        className="button"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <p>
        {label}: {count}
      </p>
      <button
        type="button"
        className="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  )
}
CounterHooks.propTypes = {
  label: PropTypes.string,
}
CounterHooks.defaultProps = {
  label: 'Count',
}

class CounterClass extends Component {
  static propTypes = {
    label: PropTypes.string,
  }
  static defaultProps = {
    label: 'Count',
  }

  constructor(props) {
    super(props)

    this.state = {
      count:
        Number.parseInt(window.localStorage.getItem('count')) ||
        getRandomCount(),
    }
  }

  componentDidMount() {
    window.localStorage.setItem('count', this.state.count)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      window.localStorage.setItem('count', this.state.count)
    }
  }

  render() {
    return (
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
        <p>
          {this.props.label}: {this.state.count}
        </p>
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
    )
  }
}

const App = () => (
  <main>
    <Nav crumbs={[{ to: '/step-2', children: 'Step 2' }, 'Teach']} />
    <div className="grid-x grid-margin-x">
      <div className="cell small-6">
        <CounterClass />
      </div>
      <div className="cell small-6">
        <CounterHooks />
      </div>
    </div>

    <div className="grid-x grid-margin-x" style={{ marginTop: '5rem' }}>
      <div className="cell small-6">
        <ClockClass />
      </div>
      <div className="cell small-6">
        <ClockHooks />
      </div>
    </div>
  </main>
)

export default App
