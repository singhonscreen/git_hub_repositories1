import React, { useState, useEffect } from 'react'
import { Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import GitHubPage from './components/GitHubPage';
import SearchPage from './components/SearchPage';
import Repos from './components/Repos';
import history from './components/history';

function App() {
  
  const [state, setState] = useState()
  const [loading, setLoading] = useState(false)
  const [searchData, setSearchData] = useState()

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" >
            <SearchPage setState={setState}  setSearchData = {setSearchData} state={state} searchData = {searchData} />
          </Route>
          <Route path={`/users/${searchData}/repos`} >
            <GitHubPage searchData={searchData} setLoading = {setLoading} loading={loading} />
            <Repos searchData={searchData} setLoading = {setLoading}  />
          </Route>
          <Redirect to ="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
