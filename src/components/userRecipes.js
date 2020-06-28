import React, { useState, useEffect } from "react";
import { authentication } from "../utils/authentication";
import styled from "styled-components";
import { Card, FormGroup} from "reactstrap";
import './recipe.css'
import { Link } from "react-router-dom";



const TextInput = styled.input`
  margin: 1% 1%;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0 2%;
  border: 2px solid purple;
`;

const ButtonStyle = styled.button`
  width: 100px;
  height: 35px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  background: lightblue;
  color: black;
  margin-top: 1%;
  font: 15px Poppins, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
//initial state
const initialRecipe = {
    id: null,
    title: "",
    creator: "",
    ingredients: "",
    directions: "",
    category: "",
    user_id: ""
  };
  
//functional component
const UserRecipe = props => {
  const [posts, setPosts] = useState([]); //using useState hook to setup initial state
  const [edit, setEdit] = useState(false); //starts off with edit recipe not showing
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
//first one is before, second is after



//for user recipes!!!

useEffect(() => {
    authentication()
      .get(`/api/recipes/${localStorage.getItem("id")}/user`)
      .then(res => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch(err =>
        console.log(
          "sorry, an error has occurred while fetching recipe page",
          err
        )
      );
  }, []);


  const editRecipe = recipes => {
    setEdit(true); //true allows for the edit recipe to show after onclick
    setRecipeToEdit(recipes); //being updated with new recipes that Im mapping through
  };

  const saveEdit = e => {
    e.preventDefault();
    const {
    title,
    creator,
    ingredients,
    directions,
    category

    } = recipeToEdit; //this shows the original info that needs to be edited
    console.log({ title, creator, ingredients, directions, category });
    authentication()
      .put(`/api/recipes/${recipeToEdit.id}`, {
        title,
        creator,
        ingredients,
        directions,
        category
      })
      .then(res => {
        console.log(res);
        document.location.reload(true);
      })
      .catch(err => console.log("sorry, could not edit recipe", err.res));
  };

  const deleteRecipe = recipe => {
    authentication()
      .delete(`/api/recipes/${recipe.id}`, recipe)
      .then(res => {
        console.log(res);
        document.location.reload(true);
      })
      .catch(err =>
        console.log("sorry, could not delete recipe", err.res)
      );
  };


  //handle for search


  return (
    <>
  
<div class="container1">

<div className='accountthing'>
               
                <Link className='login-link' to='/api/recipes/add'>Add recipes</Link>
                <Link className='login-link' to='/api/recipes'>All recipes</Link>
            </div>

      <div class="cardthing">
        {posts.map(recipes => (
             <Card
             key={recipes.id}
             style={{ margin: "20px auto", width: "30%", backgroundColor: "hotpink" }}
           >
          <div key={recipes.id} className="recipes">
            <p className="recipe-input">Title: {recipes.title}</p>
            <p className="recipe-input">Creator: {recipes.creator}</p>
            <p className="recipe-input">Ingredients: {recipes.ingredients}</p>
            <p className="recipe-input">Directions: {recipes.directions}</p>
            <p className="recipe-input">Category: {recipes.category}</p>
            <ButtonStyle onClick={() => editRecipe(recipes)}>Edit</ButtonStyle>
            <ButtonStyle onClick={() => deleteRecipe(recipes)}>
              Delete
            </ButtonStyle>
            <hr />
          </div>
          </Card>
        ))}

        {edit && (
            <Card style={{ margin: "20px auto", width: "70%", display: "flex" }}>
          <form onSubmit={saveEdit}>
              <div class="um">
            <h3 className="edit-title">
              Edit Recipe{" "}
            </h3>
            <FormGroup>
            <TextInput
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, title: e.target.value })
              }
              value={recipeToEdit.title}
            />
            </FormGroup>

            <FormGroup>
            <TextInput
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, creator: e.target.value })
              }
              value={recipeToEdit.creator}
            />
            </FormGroup>

            <FormGroup>
            <TextInput
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, ingredients: e.target.value })
              }
              value={recipeToEdit.ingredients}
            />
            </FormGroup>

            <FormGroup>
            <TextInput
              onChange={e =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  directions: e.target.value
                })
              }
              value={recipeToEdit.directions}
            />
             </FormGroup>

             <FormGroup>
            <TextInput
              onChange={e =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  category: e.target.value
                })
              }
              value={recipeToEdit.category}
            />
             </FormGroup>
            <ButtonStyle type="submit">save</ButtonStyle>
            <ButtonStyle onClick={() => setEdit(false)}>cancel</ButtonStyle>
            </div>
          </form>
          </Card>
        )}
      </div>
      </div>
    </>
  );
};

export default UserRecipe;
