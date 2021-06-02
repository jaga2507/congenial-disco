import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Packs from './components/Packs/Packs'
import Login from './components/Login/Login'
import TopShotPage from './components/TopShot/TopShotPage'
import Register from './components/Register/Register'
import Marketplace from './components/marketplace/Marketplace'
import Community from './components/community/Community'
import Common from './components/common-question/Common'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={TopShotPage} />
            <Route exact path="/packs"  component={Packs} />
            <Route exact path="/marketplace" component={Marketplace} />
            <Route exact path="/community"  component={Community} />
            <Route exact path="/common"  component={Common} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
