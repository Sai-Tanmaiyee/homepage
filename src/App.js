import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
