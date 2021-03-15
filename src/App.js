import React, { createContext, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Nav from "./component/Nav/Nav";
import AllServices from "./pages/AllServices";
import CheckOut from "./pages/CheckOut";
import Landing from "./pages/Landing";
import SearchResult from "./pages/SearchResult";
import SingleService from "./pages/SingleService";
import store from "./StatesManagement/Store";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState({});
  return (
    <Provider store={store}>
      <cartContext.Provider value={[cart, setCart]}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/singleService/:id" component={SingleService} />
            <Route exact path="/allServices" component={AllServices} />
            <Route exact path="/allExprence" component={AllServices} />
            <Route exact path="/search" component={SearchResult} />
            <Route exact path="/checkOut" component={CheckOut} />
          </Switch>
        </Router>
      </cartContext.Provider>
    </Provider>
  );
}

export default App;
