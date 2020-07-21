import React, { useState, useEffect } from 'react'
import Nav from '../../Nav'

const useCurrentDateTime = (tickAmount) => {
  const [date, setDate] = useState(() => new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, tickAmount)

    return () => {
      clearInterval(intervalId)
    }
  }, [tickAmount])

  return date
}

const ONE_DAY = 1000 * 60 * 60 * 24

const Calendar = () => {
  const day = useCurrentDateTime(ONE_DAY)

  return <p>The current date is {day.toLocaleDateString()}.</p>
}

const Clock = () => {
  const time = useCurrentDateTime(1000)

  return <p>The time is {time.toLocaleTimeString()}.</p>
}

const getRandomCount = () => Math.ceil(Math.random() * 10)

// Custom hooks must begin with "use"
const useStoredCount = (storageKey) => {
  const [count, setCount] = useState(
    () =>
      Number.parseInt(window.localStorage.getItem(storageKey)) ||
      getRandomCount(),
  )

  useEffect(() => {
    window.localStorage.setItem(storageKey, count)
  }, [count, storageKey])

  return [count, setCount]
}

const NumberField = () => {
  const [count, setCount] = useStoredCount('field-count')

  return (
    <input
      type="number"
      value={count}
      onChange={(e) => setCount(e.target.value)}
    />
  )
}

const Counter = () => {
  const [count, setCount] = useStoredCount('counter-count')

  return (
    <div>
      <button
        type="button"
        className="button"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <p>Count: {count}</p>
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

const App = () => {
  return (
    <main>
      <Nav crumbs={[{ to: '/step-4', children: 'Step 4' }, 'Teach']} />
      <div style={{ maxWidth: 500, margin: '0 auto' }}>
        <Counter />
        <NumberField />
        <Clock />
        <Calendar />
      </div>
    </main>
  )
}

export default App
