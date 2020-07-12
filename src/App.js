import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Step1 from './01-state/App'
import Step1Teach from './01-state/teach/App'
import Step1Final from './01-state/final/App'
import Step1FinalBonus1 from './01-state/final/App.bonus-1'
import Step1FinalBonus2 from './01-state/final/App.bonus-2'

const Index = () => (
  <main>
    <h1>Migrating to React Hooks Minishop</h1>
    <nav
      style={{
        marginTop: '2rem',
        display: 'flex',
      }}
    >
      <ul className="vertical menu" style={{ flex: 1 }}>
        <li>
          <h4>Step 1 - State</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-1">Exercises</Link>
            </li>
            <li>
              <Link to="/step-1/final">Final</Link>
            </li>
            <li>
              <Link to="/step-1/final/bonus-1">Final (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-1/final/bonus-2">Final (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-1/teach">Teach</Link>
            </li>
          </ul>
        </li>

        <li>
          <h4>Step 3 - Context &amp; Ref</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-3">Exercises</Link>
            </li>
            <li>
              <Link to="/step-3/final">Final</Link>
            </li>
            <li>
              <Link to="/step-3/final/bonus-1">Final (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-3/final/bonus-2">Final (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-3/teach">Teach</Link>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="vertical menu" style={{ flex: 1 }}>
        <li>
          <h4>Step 2 - Effects</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-2">Exercises</Link>
            </li>
            <li>
              <Link to="/step-2/final">Final</Link>
            </li>
            <li>
              <Link to="/step-2/final/bonus-1">Final (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-2/final/bonus-2">Final (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-2/teach">Teach</Link>
            </li>
          </ul>
        </li>

        <li>
          <h4>Step 4 - Custom Hooks</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-4">Exercises</Link>
            </li>
            <li>
              <Link to="/step-4/final">Final</Link>
            </li>
            <li>
              <Link to="/step-4/final/bonus-1">Final (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-4/final/bonus-2">Final (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-4/teach">Teach</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </main>
)

const App = () => (
  <Router>
    <Switch>
      <Route path="/step-1/final/bonus-1">
        <Step1FinalBonus1 />
      </Route>
      <Route path="/step-1/final/bonus-2">
        <Step1FinalBonus2 />
      </Route>
      <Route path="/step-1/final">
        <Step1Final />
      </Route>
      <Route path="/step-1/teach">
        <Step1Teach />
      </Route>
      <Route path="/step-1">
        <Step1 />
      </Route>

      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)

export default App
