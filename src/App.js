import React, { useState, useEffect } from "react";
// import Login from "./components/login";
// import Register from "./components/register";
import RecipeCard from "./components/recipe";
// import NewRecipe from "./components/newRecipe"
// import PrivateRoute from "./utils/privateRoute"
// import { Route, Switch} from "react-router-dom";
// import UserRecipes from "./components/userRecipes";
import axios from "axios";
import Users from './components/users';

function App() {
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

      <Users />
    </div>
  );
}

export default App;
