import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";
import SingleService from "./pages/SingleService";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/singleService/:id" component={SingleService} />
      </Switch>
    </Router>
  );
}

export default App;
