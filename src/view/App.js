import { Switch, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './containers/LandingPage/LandingPage';
import SingleShow from './containers/SingleShow/SingleShow';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/singleshow/:id' component={SingleShow} />
    </Switch>
  );
}

export default App;
