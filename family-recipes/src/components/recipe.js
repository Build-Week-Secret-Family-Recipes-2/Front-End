import React, { useState } from "react";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";

const RecipeCard = () => {
  //setting initial state
  const [userRecipe, setUserRecipe] = useState({
    recipeTitle: "",
    source: "",
    ingredients: "",
    instructions: "",
    categories: "",
  });

  //validation schema
  const recipeSchema = yup.object().shape({
    recipeTitle: yup.string().required("Enter your Recipe Name"),
    source: yup.string().required("Enter your Source"),
    ingredients: yup.string().required("Enter your Ingredients"),
    instructions: yup.string().required("Enter your Instructions Please"),
    categories: yup.string().required("Enter your Category!"),
  });

  //submit form
  const submitRecipeForm = (e) => {
    recipeSchema
      .validate(userRecipe)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRecipeChange = (e) => {
    setUserRecipe({ ...userRecipe, [e.target.name]: e.target.value });
  };
  return (
    <Card style={{ margin: "20px auto", width: "50%" }}>
      <Form
        style={{ margin: "20px auto" }}
        onSubmit={(e) => {
          e.preventDefault();
          submitRecipeForm();
          console.log(userRecipe);
        }}
      >
        <FormGroup>
          <Label for="recipeTitle">Recipe Title</Label>
          <Input
            type="text"
            name="recipeTitle"
            id="recipeTitle"
            placeholder="Title"
            onChange={handleRecipeChange}
          />
          <FormGroup>
            <Label for="source">Source</Label>
            <Input
              type="text"
              name="source"
              id="source"
              placeholder="source"
              onChange={handleRecipeChange}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="Ingredients">Ingredients</Label>
          <Input
            type="textarea"
            name="ingredients"
            id="Ingredients"
            placeholder="Ingredients"
            onChange={handleRecipeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="instructions">instructions</Label>
          <Input
            type="textarea"
            name="instructions"
            id="instructions"
            placeholder="instructions"
            onChange={handleRecipeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="catergories">Categories</Label>
          <Input
            type="text"
            name="categories"
            id="categories"
            placeholder="categories"
            onChange={handleRecipeChange}
          />
        </FormGroup>

        <Button color="danger">Add Recipe</Button>
      </Form>
    </Card>
  );
};

export default RecipeCard;
