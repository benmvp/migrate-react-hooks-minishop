# Step 2 - Effects

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of _side effects_. They are not part of the main render loop of a component, but are very common in React components.

🏅 The goal of this step is to learn how to use the `useEffect` hook in a function component to replace the `componentDidMount`, `componentDidUpdate` & `componentWillUnmount` lifecycle methods from class components.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling, and it's preventing you from working on this step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 1 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## ⭐ Concepts

- Handling effects without cleanup
- Handling effects with cleanup
- Optimizing performance by skipping redundant effects

## 💡 Exercises

In [`App.js`](./App.js), convert the `App` class component into a function component using the `useEffect` hook to make the API request and update the state with the API response.

(If at any point you get stuck, you can take a peek at the [answers](./answers/App.js))

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Migrating+to+React+Hooks+Minishop&entry.1984987236=Step+2+-+Effects). It will help seal in what you've learned.

## 🤓 Bonus!

### 1. Polling

Add polling to the app such that it will continually retrieve new results after a configurable amount of seconds. Add a `pollInterval` prop to `App` and have it default to 10 seconds. Verify that if you change `pollInterval` in the React Developer Tools the previous interval is cleaned up and a new one is created.

### 2. Async `useEffect`

Use an `async` function for the call to `getResults()` within `useEffect()` instead of calling `.then()` on its return value.

🔑 _HINT:_ Remember that an `async` function **always** returns a `Promise`, but the only return value allowed for `useEffect()` is the cleanup function callback.

## 📕 Resources

- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [`useEffect` API Reference](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [Helper functions in the React `useEffect` hook](https://www.benmvp.com/blog/helper-functions-react-useeffect-hook/?utm_source=github&utm_medium=minishop-code&utm_campaign=migrate-react-hooks-minishop)
- [React Hooks](https://www.youtube.com/watch?v=jd8R0a2Ur8Q) 📺
- [Async React Hooks](https://www.youtube.com/watch?v=HQq5Sod8AEk) 📺
- [Introducing Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM) 📺
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

## 👉🏾 Next Step

Go to [Step 3 - Context](../03-context/).
