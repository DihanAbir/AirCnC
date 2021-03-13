import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import AllServices from "./pages/AllServices";
import CheckOut from "./pages/CheckOut";
import Landing from "./pages/Landing";
import SearchResult from "./pages/SearchResult";
import SingleService from "./pages/SingleService";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/singleService/:id" component={SingleService} />
        <Route exact path="/allServices" component={AllServices} />
        <Route exact path="/allExprence" component={AllServices} />
        <Route exact path="/search" component={SearchResult} />
        <Route exact path="/checkOut" component={CheckOut} />
      </Switch>
    </Router>
  );
}

export default App;
