import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import RecipeCard from "./components/recipe";
import PrivateRoute from "./utils/privateRoute"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRecipes from "./components/recipes";
import UserRecipe from "./components/userRecipes";


function App() {
  return (
    <Router>
    <div className="App">
       
      <Switch>

      <Route path='/api/auth/register' component={Register} />
      <Route exact path='/api/auth/login' component={Login} />

        <PrivateRoute path="/api/recipes/add" component={RecipeCard}/>
        <PrivateRoute path="/api/recipes/id" component={UserRecipe}/>
        <PrivateRoute path='/api/recipes' component={UserRecipes} />
      
      </Switch>

    </div>
    </Router>
  );
}



export default App;
