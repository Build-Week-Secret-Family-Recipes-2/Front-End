import React, { useState, useEffect } from "react";
// import Login from "./components/login";
// import Register from "./components/register";
import RecipeCard from "./components/recipe";
// import NewRecipe from "./components/newRecipe"
// import PrivateRoute from "./utils/privateRoute"
// import { Route, Switch} from "react-router-dom";
import UserProfile from "./components/profile";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    axios
      .get("https://build-week-recipe-back-end.herokuapp.com/api/users")
      .then((resp) => {
        setData(resp.data);
        console.log(resp.data.firstName);
        setUserName(resp.data.username);
        setFirstName(resp.data.firstName);
        setLastName(resp.data.lastName);
        console.log(userName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://build-week-recipe-back-end.herokuapp.com/api/recipes")
      .then((resp) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {/* <Switch> */}
      {/* <Route path='/register' >
            <Register />
          </Route> */}

      {/* <Route exact path='/login'>
            <Login />
          </Route> */}

      {/* <PrivateRoute path='BACK END API PATH' component={NewRecipe} />

          <PrivateRoute path='/' component={RecipeCard} /> */}

      {/* </Switch> */}

      <UserProfile profileArray={data} userName={userName} />
    </div>
  );
}

export default App;
