import React from 'react';
import {
  Switch, Route, NavLink, useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { DetailsArticle } from './articles/DetailsArticle';
import { NotFound } from './pages/NotFound';
import { PageAbout } from './pages/PageAbout';
import { SearchBar } from './searchBar/SearchBar';
import './components/header.css';

const Content = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="page">
        <Switch>
          <Route exact path="/" component={SearchBar} />

          <Route exact path="/about" component={PageAbout} />

          <Route exact path="/details/:qInTitle" component={DetailsArticle} />
          <Route path="*" component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
export function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src="../../img/logo.png" alt="logo" />
        <nav className="nav">
          <ul className="nav_list">
            <li>
              <NavLink
                exact
                className="non-active"
                activeStyle={{ color: 'rgb(165, 32, 32)' }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="non-active"
                activeStyle={{ color: 'rgb(165, 32, 32)' }}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="routes-container">
        <Content />
      </section>
    </div>
  );
}
