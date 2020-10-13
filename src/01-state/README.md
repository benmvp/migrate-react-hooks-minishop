# Step 1 - State

Before hooks, a function component had to be converted to a class component if it needed to maintain state (or leverage lifecycle methods). A React Hook is a special function that lets you "hook into" React features. The `useState` hook lets you now add React state to function components.

🏅 The goal of this step is to switch from maintaining state with classes (using `this.state` & `setState`) to using the `useState` hook.

## ⭐ Concepts

- Defining function components
- Maintaining UI state with the `useState` hook
- Rules of hooks

## 💡 Exercises

In [`App.js`](./App.js), convert the `App` class component into a function component using the `useState` hook to maintain the state of the input field.

(If at any point you get stuck, you can take a peek at the [answers](./answers/App.js))

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the bonuses, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Migrating+to+React+Hooks+Minishop&entry.1984987236=Step+1+-+State). It will help seal in what you've learned.

## 🤓 Bonus!

### 1. Display the query

Add a `<p>` below the `<form>` that will display "You are searching for **[query]** on Giphy." (with the query in bold). The message should _only_ display when the query is non-empty.

### 2. Capitalize the message

Add a button that when clicked will toggle the query message between being upper-case and normal case.

🔑 _HINT:_ You will need to add a second `useState`

## 📕 Resources

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [`useState` API Reference](https://reactjs.org/docs/hooks-reference.html#usestate)
- [React Hooks: Array Destructuring Fundamentals](https://kentcdodds.com/blog/react-hooks-array-destructuring-fundamentals)
- [Four characters can optimize your React component](https://www.benmvp.com/blog/four-characters-optimize-react-component/)
- [React Hooks](https://www.youtube.com/watch?v=jd8R0a2Ur8Q) 📺
- [Introducing Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM) 📺
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`useReducer` API Reference](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Public class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

## 👉🏾 Next Step

Go to [Step 2 - Effects](../02-effects).
