import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import { PageAbout } from './components/pageAbout'
import { SearchBar } from './searchBar/SearchBar'

export function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/about/" component={PageAbout} />
            <Route path="/details/:id">
              <PageAbout />
            </Route>
            <Route path="/*" component={NotFound} />
          </Switch>
        </section>
      </div>
    </Router>
  )
}
