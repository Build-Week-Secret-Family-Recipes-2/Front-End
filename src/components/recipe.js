import React, { useState} from "react";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";
// import * as yup from "yup";
import {authentication} from "../utils/authentication"
import { Link} from "react-router-dom";
import './recipe.css';



const recipeId = window.localStorage.getItem("id");

const initialState = {
  title: "",
  creator: "",
  ingredients: "",
  directions: "",
  category: "",
  user_id: recipeId
};

const RecipeCard = props => {
  const [addedRecipe, setAddedRecipe] = useState(initialState);

  const handleChange = e => {
    setAddedRecipe({
      ...addedRecipe,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    authentication()
    .post(`/api/recipes/${recipeId}/user`, addedRecipe)
    .then(res=>{

      console.log(res, 'added recipe data working')
      setAddedRecipe(res.data.brandNewRecipe);
        
     
    })
    .catch(err=>console.log(err, 'recipeData failed to return'))
   

    props.history.push("/api/recipes");
    console.log(addedRecipe);
  };



  return (
    <>
    <div class="container2">
    <div className='accountthing'>
    <Link className='login-link' to='/api/recipes/id'>User Recipes</Link>
                <Link className='login-link' to='/api/recipes'> All Recipes</Link>
            </div>
    <Card style={{ margin: "20px auto", width: "50%" }}>
      <Form
      onSubmit={handleSubmit} >
        <FormGroup>
          <Label for="title">Recipe Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            onChange={handleChange}
            value={addedRecipe.title}
          />
          {/* {errors.title.length > 0 ? <p>{errors.title}</p> : null} */}

          <FormGroup>
            <Label for="creator">Source</Label>
            <Input
              type="text"
              name="creator"
              id="creator"
              placeholder="creator"
              onChange={handleChange}
              value={addedRecipe.creator}
            />
            {/* {errors.creator.length > 0 ? <p>{errors.creator}</p> : null} */}
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="Ingredients">Ingredients</Label>
          <Input
            type="textarea"
            name="ingredients"
            id="Ingredients"
            placeholder="Ingredients"
            onChange={handleChange}
            value={addedRecipe.ingredients}
          />
          {/* {errors.ingredients.length > 0 ? <p>{errors.ingredients}</p> : null} */}
        </FormGroup>

        <FormGroup>
          <Label for="directions">directions</Label>
          <Input
            type="textarea"
            name="directions"
            id="directions"
            placeholder="directions"
            onChange={handleChange}
            value={addedRecipe.directions}
          />
          {/* {errors.directions.length > 0 ? <p>{errors.directions}</p> : null} */}
        </FormGroup>

        <FormGroup>
          <Label for="category">Categories</Label>
          <Input
            type="text"
            name="category"
            id="category"
            placeholder="category"
            onChange={handleChange}
            value={addedRecipe.category}
          />
          {/* {errors.category.length > 0 ? <p>{errors.category}</p> : null} */}
        </FormGroup>

        {/* <FormGroup>
          <Label for="user_id">user_id</Label>
          <Input
            type="integer"
            name="user_id"
            id="user_id"
            placeholder="user_id"
            onChange={handleChange}
            value={addedRecipe.user_id}
          /> */}
          {/* {errors.user_id.length > 0 ? <p>{errors.user_id}</p> : null} */}
        {/* </FormGroup> */}

        <Button color="danger" type="submit" >
          Add Recipe
        </Button>
      </Form>
    </Card>
    </div>
    </>
  );
};


export default RecipeCard;