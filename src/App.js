import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
