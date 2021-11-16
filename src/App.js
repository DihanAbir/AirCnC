import React, { createContext, useState } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Breadcrum from "./component/Breadcrum";
import NavCUstome from "./component/Nav/Nav";
import AllExprence from "./pages/AllExprence";
import AllServices from "./pages/AllServices";
import CheckOut from "./pages/CheckOut";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";
import SingleService from "./pages/SingleService";
import store from "./StatesManagement/Store";
import PrivateRoute from "./utils/PrivateRoute/PrivateRoute";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState({});
  const [signIn1, setSignIn1] = useState({});
  return (
    // <Provider store={store}>
    <cartContext.Provider value={[cart, setCart, signIn1, setSignIn1]}>
      <Router>
        <NavCUstome />
        <Breadcrum />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/singleService/:id" component={SingleService} />
          <Route exact path="/allServices" component={AllServices} />
          <Route exact path="/allExprence" component={AllExprence} />
          <Route exact path="/search" component={SearchResult} />
          {/* <PrivateRoute exact path="/search" component={SearchResult} /> */}
          <Route exact path="/Login" component={Login} />
          <Route exact path="/admin" component={Dashboard} />

          {/* <PrivateRoute path="/checkOut" component={CheckOut} /> */}
          <Route path="/checkOut">
            <CheckOut />
          </Route>
        </Switch>
      </Router>
    </cartContext.Provider>
    // </Provider>
  );
}

export default App;
