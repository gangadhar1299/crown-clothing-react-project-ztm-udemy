import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

function App() {

  const Hats = (...props) => <div><h1>{console.log(props)}Hats Page</h1></div>

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' render={Hats} />
      </Switch>
    </div>
  );
}
export default App;
