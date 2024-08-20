import React, { useEffect,useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
import Header from './component/layout/Header/Header';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home.js';
import ProductDetails from "./component/Product/ProductDetails.js"
import Loader from './component/layout/Loader/Loader.js';
import { getProductDetails } from './actions/productAction.js';
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp.js';
import store from "./store.js";
import { loadUser, updateProfile } from './actions/userAction.js';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import ProtectedRoute from './component/Route/ProtectedRoute.js';
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from 'axios';
import Payment from "./component/Cart/Payment.js"; 
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import About from "./component/layout/About/About.js";


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Droid Serif']
      }
    });

    store.dispatch(loadUser());

    getStripeApiKey();

  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());


  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        {isAuthenticated && <UserOptions user={user} />}

          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:keyword" component={Products} />

          <Route exact path="/search" component={Search} />

          <Route exact path="/about" component={About} />

          <ProtectedRoute exact path="/account" component={Profile} />

          <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

          <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

<Route
          exact
          path="/password/forgot"
          component={ForgotPassword}
        />

          <Route exact path="/login" component={LoginSignUp} />

          <Route exact path="/cart" component={Cart} />


          
          <Route
          exact
          path="/password/reset/:token"
          component={ResetPassword}
        />

<ProtectedRoute exact path="/shipping" component={Shipping} />


{stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}

<ProtectedRoute exact path="/success" component={OrderSuccess} />

<ProtectedRoute exact path="/orders" component={MyOrders} />

<Switch>
<ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

<ProtectedRoute exact path="/order/:id" component={OrderDetails} />

</Switch>


        
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
 