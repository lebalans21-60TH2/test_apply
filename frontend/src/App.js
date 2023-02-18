import "./App.css";
import Home from "./component/Home/Home";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignup from "./component/Authentication/LoginSignup";
import { loadUser } from "./actions/userAction";
import Store from "./store";

function App() {
  
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginSignup} />
      </Switch>
    </Router>
  );
}

export default App;
