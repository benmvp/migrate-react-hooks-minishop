import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Step1 from './01-state/App'
import Step1Teach from './01-state/teach/App'
import Step1Answers from './01-state/answers/App'
import Step1AnswersBonus1 from './01-state/answers/App.bonus-1'
import Step1AnswersBonus2 from './01-state/answers/App.bonus-2'

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
              <Link to="/step-1/answers">Answers</Link>
            </li>
            <li>
              <Link to="/step-1/answers/bonus-1">Answers (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-1/answers/bonus-2">Answers (Bonus #2)</Link>
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
              <Link to="/step-3/answers">Answers</Link>
            </li>
            <li>
              <Link to="/step-3/answers/bonus-1">Answers (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-3/answers/bonus-2">Answers (Bonus #2)</Link>
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
              <Link to="/step-2/answers">Answers</Link>
            </li>
            <li>
              <Link to="/step-2/answers/bonus-1">Answers (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-2/answers/bonus-2">Answers (Bonus #2)</Link>
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
              <Link to="/step-4/answers">Answers</Link>
            </li>
            <li>
              <Link to="/step-4/answers/bonus-1">Answers (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-4/answers/bonus-2">Answers (Bonus #2)</Link>
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
      <Route path="/step-1/answers/bonus-1">
        <Step1AnswersBonus1 />
      </Route>
      <Route path="/step-1/answers/bonus-2">
        <Step1AnswersBonus2 />
      </Route>
      <Route path="/step-1/answers">
        <Step1Answers />
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
