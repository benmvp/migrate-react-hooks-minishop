# NOTES

## Step 1 - State

- sticking w/ function components (no longer need to convert when adding state)
- single state item (`this.setState` -> `useState`)
- event handlers use inner functions instead of methods
- multiple state items (multiple `useState` calls)
- initialized from prop
- updater function
- initializer function

## Step 2 - Effects

- `Counter` example w/ updating state on setInterval (`componentDidMount` -> `useEffect`)
  - unmount is effect clean-up (`componentWillUnmount` -> `useEffect`)
  - dependencies list is empty array for "1-time" setup
- API call based on the props being based in
  - would use `componentDidUpdate` to call again (`useEffect`)
  - instead dependencies list includes the props (or any other variables used)

## Step 3 - Context & Ref

- focus a text input (`createRef` -> `useRef`)
- language in context (`contextType` -> `useContext`)
- Exercise: dark-mode
  - Bonus: read browser dark-mode setting

## Step 4 - Custom Hooks

- `useLang` wrapper over language in context
- `useCounter` wrapper over `useEffect` + `useState` `setInterval`
- Exercise: `useDarkMode`

## Quiz

- custom hook that simulates automated typing on the screen
