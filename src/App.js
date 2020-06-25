import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import RecipeCard from "./components/recipe";
import Profile from "./components/profile";
import NewRecipe from "./components/newRecipe";
import PrivateRoute from "./utils/privateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UserRecipes from "./components/userRecipes";
import Users from "./components/users";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/api/auth/register" component={Register} />

          <Route exact path="/api/auth/login" component={Login} />

          <PrivateRoute exact path="/profile" component={Profile} />

          {<PrivateRoute path="/CreateRecipe" component={RecipeCard} />}

          <PrivateRoute path="/api/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
