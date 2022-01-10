import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";

import "./App.css";

import LandingPage from "./Containers/LandingPage";
import UserHome from "./Containers/UserHome";
import FoodSubDetails from "./Containers/FoodSubDetails";
import UserProfile from "./Containers/UserProfile/UserProfile";
import ChefHome from "./Containers/ChefHome";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import ChefProfile from "./Containers/ChefProfile";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Services/user.service";
import { getChefs } from "./Services/chef.service";
import PrivateRoute from "./Utils/helper/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "./Components/Preloader/Preloader";

const fetchUserData = async (accessToken, uid, dispatch) => {
  dispatch({
    type: "UPDATE_ACCESS_TOKEN",
    details: { accessToken, uid },
  });

  const userData = await getUser(accessToken);
  const chefDetails = await getChefs();

  dispatch({
    type: "UPDATE_USER_DATA",
    details: userData,
  });
  dispatch({
    type: "UPDATE_CHEF_DATA",
    details: chefDetails,
  });
};

const App = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  const history = useHistory();
  const location = history.location;
  const dispatch = useDispatch();
  const auth = getAuth();

  const [isDataBeingLoaded, setIsDataBeingLoaded] = React.useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        fetchUserData(user.accessToken, user.uid, dispatch);
        setIsDataBeingLoaded(false);
      } else {
        console.log("user is signed out");
        if (
          location.pathname !== "/" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/signin"
        ) {
          history.push("/");
        }
        setIsDataBeingLoaded(false);
      }
    });
  }, []);

  useEffect(() => {
    if (userData.name) {
      let currentPage = history.location.pathname.split("/")[1];
      if (
        (currentPage !== "home" &&
          currentPage !== "profile" &&
          currentPage !== "chef") ||
        (userData.isChef && currentPage === "chef")
      ) {
        history.push("/home");
      }
    } else {
      if (
        location.pathname !== "/" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/signin"
      ) {
        history.push("/");
      }
    }
  }, [history.location.pathname, userData.name]);

  return (
    <>
      {isDataBeingLoaded ? (
        <Preloader />
      ) : (
        <>
          <ToastContainer bodyClassName="ToastBody" />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path={["/signin", "/signup"]} component={LandingPage} />
            <PrivateRoute
              path="/home"
              component={UserHome}
              ChefComp={ChefHome}
            />
            <PrivateRoute
              path="/profile"
              component={UserProfile}
              ChefComp={ChefProfile}
            />
            {userData.isChef && <Redirect to="/home" />}
            <PrivateRoute path="/chef/:cid" component={FoodSubDetails} />
            {userData.name && <Redirect to="/home" />}
            <Redirect to="/" />
          </Switch>
        </>
      )}
    </>
  );
};

export default App;
