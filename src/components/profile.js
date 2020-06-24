import React, { useState, useEffect } from "react";
import { Card, Button } from "reactstrap";
import { authentication } from "../utils/authentication";

const UserProfile = (props) => {
  const [userRecipes, setUserRecipes] = useState([]);
  useEffect(() => {
    authentication()
      .get("/api/recipes")
      .then((res) => {
        setUserRecipes(res.data);
        console.log(userRecipes);
      })
      .catch((err) => {
        console.log("Couldn't add recipe!", err);
      });
  }, []);
  return (
    <Card>
      <h1 style={{ marginLeft: "45%", width: "50%" }}>Recipes</h1>
      <div>
        {userRecipes.map((recipes) => {
          return (
            <Card
              key={recipes.id}
              style={{ margin: "20px auto", width: "20%" }}
            >
              <p style={{ marginLeft: "25%", marginTop: "10px" }}>
                Title: {recipes.title}
              </p>
              <p style={{ marginLeft: "25%" }}>Source: {recipes.source}</p>
              <p style={{ marginLeft: "25%" }}>
                Ingredients: {recipes.ingredients}
              </p>
              <p style={{ marginLeft: "25%" }}>
                Category: {recipes.categories}
              </p>
              <Button style={{ margin: "20px auto", width: "50%" }}>
                Edit Recipe
              </Button>
            </Card>
          );
        })}
      </div>
    </Card>
  );
};

export default UserProfile;
