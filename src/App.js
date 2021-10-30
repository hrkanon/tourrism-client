import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AddDestination from "./pages/AddDestination/AddDestination";
import Destinations from "./pages/Destinations/Destinations";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import SingleDestination from "./pages/SingleDestination/SingleDestination";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import PrivateRoute from "./Private/PrivateRoute";
import AllOrders from "./pages/AllOrders/AllOrders";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import MyOrder from "./pages/MyOrders/MyOrders";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/destinations">
            <Destinations></Destinations>
          </Route>
          <PrivateRoute exact path="/destination/:destinationId">
            <SingleDestination></SingleDestination>
          </PrivateRoute>
          <Route exact path="/addDestination">
            <AddDestination></AddDestination>
          </Route>
          <Route exact path="/myOrder">
            <MyOrder></MyOrder>
          </Route>
          <Route exact path="/allOrders">
            <AllOrders></AllOrders>
          </Route>
          <PrivateRoute exact path="/placeOrder/:orderId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
