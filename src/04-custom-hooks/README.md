# Step 4 - Custom Hooks

Sharing component logic between components in React has been challenging. It's the problem where we have multiple components with different UIs but want to have the same stateful logic. Class [mixins](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html), [higher-order components](https://reactjs.org/docs/higher-order-components.html), and [render props](https://reactjs.org/docs/render-props.html) are all ways we've tried to solve this problem. Now, creating custom Hooks lets you extract component logic into reusable functions. A feature that is **not** available for class components.

🏅 The goal of this step is to learn how to combine hooks to create custom hooks.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling, and it's preventing you from working on this step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 3 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## ⭐ Concepts

- Sharing component logic by creating custom hooks
- How to create async custom hooks

## 💡 Exercises

In [`Page.js`](./Page.js), extract the `results` state and the `useEffect()` calling the Giphy API into a `useGiphy` custom hook in [`useGiphy.js`](./useGiphy.js).

(If at any point you get stuck, you can take a peek at the [answers](./answers/))

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Migrating+to+React+Hooks+Minishop&entry.1984987236=Step+4+-+Custom+Hooks). It will help seal in what you've learned.

## 🤓 Bonus!

### 1. `useTheme`

Create a `useTheme` hook that will read the `ThemeContext` and return the `foreground` & `background` theme values for the current theme:

```js
/**
 * Custom hook that reads theme context and returns
 * the theme data
 * @returns {{ background: string, foreground: string }}
 */
const useTheme = () => {
  // return the background & foreground data for
  // current theme
}
```

You should be able to use it in [`Page.js`](./Page.js), [`SearchForm.js`](./SearchForm.js) & [`ResultItem.js`](./ResultItem.js).

### 2. `useDarkMode`

Create a `useDarkMode` hook that will extract the logic in [`App.js`](./App.js) for maintaining the dark mode setting as well as initializing to the user's dark mode preference.

```js
/**
 * Custom hook that will maintain the dark mode choice,
 * initializing to the user's dark mode preference
 * @param {boolean} defaultIsDarkMode The default value dark mode setting
 * @returns {[boolean, (isDarkMode: boolean) => void]}
 */
const useDarkMode = (defaultIsDarkMode = false) => {
  // return the dark mode setting + a function to update the setting
}
```

🔑 _HINT:_ `useDarkMode` maintains a `boolean` while the `theme` passed down in context is a `string` (`light` or `dark`). You will need to derive both `theme` & `setTheme` from the values returned from `useDarkMode`.

## 📕 Resources

- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React Hooks: Custom Hooks](https://www.youtube.com/watch?v=fnT5b2u1PHE) 📺
- [Writing a Custom Hook: `useEventListener`](https://www.youtube.com/watch) 📺
- [`react-use`](https://github.com/streamich/react-use)
- [From Mixins to Custom Hooks: A history of sharing in React](https://www.youtube.com/watch?v=ox-IJGoor1c) 📺
- [`useDebugValue` API Reference](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)
- [`useCallback` API Reference](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [Render props](https://reactjs.org/docs/render-props.html)
- [Higher-order components](https://reactjs.org/docs/higher-order-components.html)

## 👉🏾 Next Step

Go to [End](../end/).
