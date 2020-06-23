import React, { useState, useEffect } from "react";
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
    yup
      .reach(recipeSchema)
      .validate(userRecipe)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Holds the state of errors
  const [errors, setErrors] = useState({
    recipeTitle: "",
    source: "",
    ingredients: "",
    instructions: "",
    categories: "",
  });

  //Checks the form to see if everything is written
  const recipeFormValidation = (e) => {
    yup
      .reach(recipeSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //Handles the input changes
  const handleRecipeChange = (e) => {
    e.persist();
    const newFormData = {
      ...userRecipe,
      [e.target.name]: e.target.value,
    };
    recipeFormValidation(e);
    setUserRecipe(newFormData);
  };

  //holds state for the button to be disabled until form is filled out
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //Changes the button to being enabled once the form is filled out, and disabled if an input is erased
  useEffect(() => {
    recipeSchema.isValid(userRecipe).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [userRecipe]);

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
            value={userRecipe.recipeTitle}
          />
          {errors.recipeTitle.length > 0 ? <p>{errors.recipeTitle}</p> : null}

          <FormGroup>
            <Label for="source">Source</Label>
            <Input
              type="text"
              name="source"
              id="source"
              placeholder="source"
              onChange={handleRecipeChange}
              value={userRecipe.source}
            />
            {errors.source.length > 0 ? <p>{errors.source}</p> : null}
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
            value={userRecipe.ingredients}
          />
          {errors.ingredients.length > 0 ? <p>{errors.ingredients}</p> : null}
        </FormGroup>

        <FormGroup>
          <Label for="instructions">instructions</Label>
          <Input
            type="textarea"
            name="instructions"
            id="instructions"
            placeholder="instructions"
            onChange={handleRecipeChange}
            value={userRecipe.instructions}
          />
          {errors.instructions.length > 0 ? <p>{errors.instructions}</p> : null}
        </FormGroup>

        <FormGroup>
          <Label for="categories">Categories</Label>
          <Input
            type="text"
            name="categories"
            id="categories"
            placeholder="categories"
            onChange={handleRecipeChange}
            value={userRecipe.categories}
          />
          {errors.categories.length > 0 ? <p>{errors.categories}</p> : null}
        </FormGroup>

        <Button disabled={buttonDisabled} color="danger">
          Add Recipe
        </Button>
      </Form>
    </Card>
  );
};

export default RecipeCard;
