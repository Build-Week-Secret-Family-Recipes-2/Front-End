import React from "react";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";

const RecipeCard = () => {
  return (
    <Card style={{ margin: "20px auto", width: "50%" }}>
      <Form style={{ margin: "20px auto" }}>
        <FormGroup>
          <Label for="recipeTitle">Recipe Title</Label>
          <Input
            type="text"
            name="recipeTitle"
            id="recipeTitle"
            placeholder="Title"
          />
          <FormGroup>
            <Label for="source">Source</Label>
            <Input type="text" name="source" id="source" placeholder="source" />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="Ingredients">Ingredients</Label>
          <Input
            type="textarea"
            name="Ingredients"
            id="Ingredients"
            placeholder="Ingredients"
          />
        </FormGroup>

        <FormGroup>
          <Label for="instructions">instructions</Label>
          <Input
            type="textarea"
            name="instructions"
            id="instructions"
            placeholder="instructions"
          />
        </FormGroup>

        <FormGroup>
          <Label for="catergories">Catergories</Label>
          <Input
            type="text"
            name="catergories"
            id="catergories"
            placeholder="catergories"
          />
        </FormGroup>

        <Button color="danger">Add Recipe</Button>
      </Form>
    </Card>
  );
};

export default RecipeCard;
