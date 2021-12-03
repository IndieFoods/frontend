import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";
import { getUser } from "./Services/user.service";

const fetchUserData = async (accessToken, dispatch) => {
  dispatch({
    type: "UPDATE_ACCESS_TOKEN",
    details: accessToken
  });

  const userData = await getUser(accessToken);

  dispatch({
    type: "UPDATE_USER_DATA",
    details: userData
  });
};

const App = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.accessToken, dispatch);
      } else {
        console.log("user is signed out");
        history.push("/");
      }
    });
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path={["/signin", "/signup"]} component={LandingPage} />
    </Switch>
  );
};

export default App;
