import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Nav from '../../Nav'

const ClockHooks = ({ tickAmount }) => {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date())
    }, tickAmount)

    return () => {
      window.clearInterval(intervalId)
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
    this.intervalId = window.setInterval(() => {
      this.setState({ time: new Date() })
    }, this.props.tickAmount)
  }

  cleanup() {
    window.clearInterval(this.intervalId)
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

const CounterHooks = ({ cacheKey, label }) => {
  const [count, setCount] = useState(
    () =>
      Number.parseInt(window.localStorage.getItem(cacheKey)) ||
      getRandomCount(),
  )

  // passing the dependencies array optimizes when the
  // effect will be called: only when `count` or `cacheKey`
  // change
  useEffect(() => {
    window.localStorage.setItem(cacheKey, count)
  }, [cacheKey, count])

  // separate `useEffect` calls which are handling
  // different effects
  useEffect(() => {
    document.title = label
  }, [label])

  return (
    <div>
      <button
        className="button"
        onClick={() => setCount((curCount) => curCount - 1)}
      >
        -
      </button>
      <p>
        {label}: {count}
      </p>
      <button
        className="button"
        onClick={() => setCount((curCount) => curCount + 1)}
      >
        +
      </button>
    </div>
  )
}
CounterHooks.propTypes = {
  cacheKey: PropTypes.string,
  label: PropTypes.string,
}
CounterHooks.defaultProps = {
  cacheKey: 'count',
  label: 'Hooks',
}

class CounterClass extends Component {
  static propTypes = {
    cacheKey: PropTypes.string,
    label: PropTypes.string,
  }
  static defaultProps = {
    cacheKey: 'count',
    label: 'Class',
  }

  constructor(props) {
    super(props)

    this.state = {
      count:
        Number.parseInt(window.localStorage.getItem(props.cacheKey)) ||
        getRandomCount(),
    }
  }

  componentDidMount() {
    this.setCache()
    this.updateTitle()
  }

  componentDidUpdate(prevProps, prevState) {
    // only write to `localStorage` if the count state or the
    // cacheKey prop has changed. When other props change
    // we shouldn't need to update the count prop
    if (
      this.state.count !== prevState.count ||
      this.props.cacheKey !== prevProps.cacheKey
    ) {
      this.setCache()
    }

    // only if the props change should we update title
    if (this.props.label !== prevProps.label) {
      this.updateTitle()
    }
  }

  setCache = () => {
    window.localStorage.setItem(this.props.cacheKey, this.state.count)
  }

  updateTitle = () => {
    document.title = this.props.label
  }

  decrement = () => {
    this.setState((curState) => ({ count: curState.count - 1 }))
  }

  increment = () => {
    this.setState((curState) => ({ count: curState.count + 1 }))
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.decrement}>
          -
        </button>
        <p>
          {this.props.label}: {this.state.count}
        </p>
        <button className="button" onClick={this.increment}>
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
