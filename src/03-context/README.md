# Step 3 - Context

Context provides a way to pass data (like locale, UI theme, etc.) through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.

🏅 The goal of this step is to learn how to use the `useContext` hook.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling, and it's preventing you from working on this step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 2 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## ⭐ Concepts

- How to provide context
- How to consume context using the `useContext` hook

## 💡 Exercises

Add dark mode to the Giphy search app!

- [ ] Read [`App.js`](./App.js) to see the `theme` & `setTheme` values passed down the App using the `ThemeContext`
- [ ] Hook up the dark mode switch in [`Header.js`](./Header.js) & properly colorize the heading
- [ ] Update the `<main>` in [`Page.js`](./Page.js) to themify the main page background
- [ ] Add theming to [`SearchForm`](./SearchForm.js), specifically the form labels
- [ ] Add theming in [`ResultItem.js`](./ResultItem.js) for the card text and background

(If at any point you get stuck, you can take a peek at the [answers](./answers/))

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Migrating+to+React+Hooks+Minishop&entry.1984987236=Step+3+-+Context). It will help seal in what you've learned.

## 🤓 Bonus!

### 1. Theme the entire body background

You will notice that the `<main>` doesn't fill the whole page, leaving a white border when in dark mode. In [`App.js`](./App.js), update the `document.body` background color to match the current theme `background`.

🔑 _HINT:_ You will need to use the `useEffect` hook to update `document.body`.

### 2. Default dark mode setting to user settings

Update [`App.js`](./App.js) so that the initial dark mode setting will be based on the user's settings of their computer.

🔑 _HINT:_ There is a [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query that you can run in JavaScript using [`window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

## 📕 Resources

- [`useContext` API Reference](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Context](https://reactjs.org/docs/context.html)
- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [How to optimize your context value](https://kentcdodds.com/blog/how-to-optimize-your-context-value)
- [How to `useContext` with `useReducer`](https://www.youtube.com/watch?v=StABs9JxeNE) 📺
- [Render props](https://reactjs.org/docs/render-props.html)

## 👉🏾 Next Step

Go to [Step 4 - Custom Hooks](../04-custom-hooks/).
