# Step 1 - State

Before hooks, a function component had to be converted to a class component if it needed to maintain state (or leverage lifecycle methods). A React Hook is a special function that lets you "hook into" React features. The `useState` hook lets you now add React state to function components.

🏅 The goal of this step is to switch from maintaining state with classes (using `this.state` & `setState`) to using the `useState` hook.

## 🐇 Jump Around

[Concepts](#-concepts) | [Learn](#-learn) | [Exercises](#-exercises) | [Elaboration & Feedback](#-elaboration--feedback) | [Resources](#-resources)

## ⭐ Concepts

- Defining function components
- Maintaining UI state with the `useState` hook
- Rules of hooks

## 📝 Learn

A component class with state may look something like:

```js
import React, { Component } from 'react'

class Toggle extends Component {
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
      <button className="button" onClick={this.handleClick}>
        {this.state.on ? 'ON' : 'OFF'}
      </button>
    )
  }
}
```

Because the next value of `on` depends on its previous value, it passes an [updater function](https://reactjs.org/docs/faq-state.html#how-do-i-update-state-with-values-that-depend-on-the-current-state).

This can be rewritten using a _function component_ and the [`useState`](https://reactjs.org/docs/hooks-state.html) hook:

```js
import React, { useState } from 'react'

const Toggle = ({ initialOn }) => {
  const [on, setOn] = useState(initialOn)

  const handleClick = () => setOn((prevOn) => !prevOn)

  return (
    <button className="button" onClick={handleClick}>
      {on ? 'ON' : 'OFF'}
    </button>
  )
}
Toggle.propTypes = {
  initialOn: PropTypes.bool,
}
Toggle.defaultProps = {
  initialOn: true,
}
```

With function components, we replace class methods with inner functions within the function component. `setState` has its own equivalent of an [updater function](https://reactjs.org/docs/hooks-reference.html#functional-updates) as well. The entire function is re-executed every time `setState` is called.

With classes, multiple state properties are added to `this.state`:

```js
const getRandomCount = () => Math.ceil(Math.random() * 10)

class Counter extends Component {
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
              this.setState((prevState) => ({ count: prevState.count - 1 }))
            }
          >
            -
          </button>
          <button
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
            value={value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </label>
      </div>
    )
  }
}
```

`this.setState` merges in the new state properties so that you don't have update the whole object each time.

You could store the entire state in one `useState()` call, but instead you can call it multiple times to create multiple state values:

```js
const getRandomCount = () => Math.ceil(Math.random() * 10)

const Counter = () => {
  const [count, setCount] = useState(() => getRandomCount())
  const [value, setValue] = useState('')

  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button
          className="button"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <button
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
```

Because the entire function component is re-executed every time `setState` is called and we only want `getRandomCount()` to be called on initial render, we pass a [lazy initializer function](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state).

Use the React Developer Tools to watch the state of `Counter` update as you toggle the button.

There are two main [rules of hooks](https://reactjs.org/docs/hooks-rules.html):

1. Only call hooks at the top level
1. Only call hooks from within React functions

## 💡 Exercises

In [`App.js`](./App.js), convert the `App` class component into a function component using the `useState` hook to maintain the state of the input field.

(If at any point you get stuck, you can take a peek at the [answers](./answers/App.js))

## 🤓 Bonus!

### 1. Display the query

Add a `<p>` below the `<form>` that will display "You are searching for **[query]** on Giphy." (with the query in bold). The message should _only_ display when the query is non-empty.

### 2. Capitalize the message

Add a button that when clicked will toggle the query message between being upper-case and normal case.

🔑 _HINT:_ You will need to add a second `useState`

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Migrating+to+React+Hooks+Minishop&entry.1984987236=Step+1+-+State). It will help seal in what you've learned.

## 📕 Resources

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [`useState` API Reference](https://reactjs.org/docs/hooks-reference.html#usestate)
- [React Hooks: Array Destructuring Fundamentals](https://kentcdodds.com/blog/react-hooks-array-destructuring-fundamentals)
- [React Hooks](https://www.youtube.com/watch?v=jd8R0a2Ur8Q) 📺
- [Introducing Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM) 📺
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`useReducer` API Reference](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Public class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

## ❓ Questions

Got questions after the minishop? Need further clarification? Feel free to post a question in [Ben Ilegbodu's AMA](https://www.benmvp.com/ama/)!

## 👉🏾 Next Step

Go to [Step 2 - Effects](../02-effects).
