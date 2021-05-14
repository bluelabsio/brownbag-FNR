import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import Home from "./components/pages/home/home";
import Data from "./components/pages/data/data";
import { AuthRoute, ProtectedRoute } from "./helpers/routes";

function App() {

  return (
    <div>
        <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <AuthRoute path="/home" component={Home} />
          <ProtectedRoute path="/data" component={Data} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
