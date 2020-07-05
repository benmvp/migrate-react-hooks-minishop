import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
          <h4>Step 1 - </h4>
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
          <h4>Step 3 - </h4>
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
          <h4>Step 2 - </h4>
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
          <h4>Step 4 - </h4>
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
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)

export default App
