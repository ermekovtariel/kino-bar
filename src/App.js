import React, { useEffect } from "react";
import "./App.css";
import { auth } from "./assets/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Auth from "./pages/Auth";
import { login, logout, selectUser } from "./redux/usersDate/userSlice";
import OpenedCinema from "./pages/OpenedCinema";

function App() {
  const user = selectUser
  const dispatch = useDispatch()
  //https://www.youtube.com/watch?v=DStFGe6Hd2c&list=LL&index=3&ab_channel=SonnySangha
  //1:46:226
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
        if (userAuth) {
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            }))
        } else {
          //Logged out
          dispatch(logout)
        }
      })
    return unsubscribe
  }, [])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Auth />
        ) : (
            < Switch >
              <Route exact path='/' >
                <OpenedCinema />
              </Route>
            </Switch>
          )}

      </Router>
    </div>
  );
}

export default App;
