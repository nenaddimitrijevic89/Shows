import { Switch, Route } from 'react-router-dom';

import './App.css';
import DetailsPage from './containers/DetailsPage/DetailsPage';
import LandingPage from './containers/LandingPage/LandingPage';
import SingleShow from './containers/SingleShow/SingleShow';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/singleshow/:id' component={SingleShow} />
      <Route exact path='singleshow/:id/details' component={DetailsPage} />
    </Switch>
  );
}

export default App;
