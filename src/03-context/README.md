# Step 3 - Context

Context provides a way to pass data (like locale, UI theme, etc.) through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.

🏅 The goal of this step is to learn how to use the `useContext` hook.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling, and it's preventing you from working on the next step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 2 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## 🐇 Jump Around

[Concepts](#-concepts) | [Learn](#-learn) | [Exercises](#-exercises) | [Elaboration & Feedback](#-elaboration--feedback) | [Resources](#-resources)

## ⭐ Concepts

- How to provide context
- How to use the `useContext` hook

## 📝 Learn

Imagine having a `LocaleContext` context to store the current locale and provide function to update it:

```js
export const LocaleContext = createContext()
```

An `App`, can provide the locale and an updater function to its tree:

```js
const App = () => {
  const [locale, setLocale] = useState('en_US')

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Layout />
    </LocaleContext.Provider>
  )
}
```

Deep in the component tree, we can have a locale switcher component that will read the current context and provide UI to change it.

Before hooks, this would be:

```js
const LocaleSwitcher = () => (
  <LocaleContext.Consumer>
    {({ locale, setLocale }) => (
      <label>
        {I18N.changeLang[locale]}
        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value="en_US">English (US)</option>
          <option value="es_ES">Español (España)</option>
        </select>
      </label>
    )}
  </LocaleContext.Consumer>
)
```

The [Context API](https://reactjs.org/docs/context.html) introduced in React 16 lets you read the context using the `LocaleContext.Consumer` component which exposes a [render prop](https://reactjs.org/docs/render-props.html).

With the `useContext` hook, the code looks similar:

```js
const LocaleSwitcher = () => {
  const { locale, setLocale } = useContext(LocaleContext)

  return (
    <label>
      z{I18N.changeLangHooks[locale]}
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="en_US">English (US)</option>
        <option value="es_ES">Español (España)</option>
      </select>
    </label>
  )
}
```

## 💡 Exercises

Add dark mode to the Giphy search app!

- [ ] Read [`App.js`](./App.js) to see the `theme` & `setTheme` values passed down the App using the `ThemeContext`
- [ ] Hook up the dark mode switch in [`Header.js`](./Header.js) & properly colorize the heading
- [ ] Update the `<main>` in [`Page.js`](./Page.js) to themify the main page background
- [ ] Add theming to [`SearchForm`](./SearchForm.js), specifically the form labels
- [ ] Add theming in [`ResultItem.js`](./ResultItem.js) for the card text and background

## 🤓 Bonus!

### 1. Theme the entire body background

You will notice that the `<main>` doesn't fill the whole page, leaving a white border when in dark mode. In [`App.js`](./App.js), update the `document.body` background color to match the current theme `background`.

🔑 _HINT:_ You will need to use the `useEffect` hook to update `document.body`.

### 2. Default dark mode setting to user settings

Update [`App.js`] so that the initial dark mode setting will be based on the user's settings of their computer and/or browser.

🔑 _HINT:_ There is a [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query that you can run in JavaScript using [`window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Migrating+to+React+Hooks+Minishop&entry.1984987236=Step+3+-+Context). It will help seal in what you've learned.

## 📕 Resources

- [`useContext` API Reference](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Context](https://reactjs.org/docs/context.html)
- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [How to optimize your context value](https://kentcdodds.com/blog/how-to-optimize-your-context-value)
- [How to `useContext` with `usesReducer`](https://www.youtube.com/watch?v=StABs9JxeNE) 📺
- [Render props](https://reactjs.org/docs/render-props.html)

## ❓ Questions

Got questions after the minishop? Need further clarification? Feel free to post a question in [Ben Ilegbodu's AMA](https://www.benmvp.com/ama/)!

## 👉🏾 Next Step

Go to [Step 4 - Custom Hooks](../04-custom-hooks/).
