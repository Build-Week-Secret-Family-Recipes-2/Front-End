import React, { useState, useEffect } from "react";
import { authentication } from "../utils/authentication";
import { Card } from "reactstrap";
import './recipe.css'
import { Link} from "react-router-dom";

  
//functional component
const UserRecipes = props => {
  const [posts, setPosts] = useState([]); //using useState hook to setup initial state
  const [searchTerm, setSearchTerm] = useState('');
  
     

     const changeHandler = e =>{
         e.persist(); 
         setSearchTerm(e.target.value)
     }

     useEffect(() => {
      authentication()
      .get(`/api/recipes/`)
      .then((res) => {
          console.log(res.data, 'res search data')
        setPosts( res.data.filter(recipes => {
            console.log(res.data)
            console.log(recipes.category)
          if(searchTerm ==="")
          {
             
            return recipes
          }
          else(
              recipes.title === searchTerm || recipes.category === searchTerm)
          {
              console.log(recipes.title.includes(searchTerm))
              console.log(recipes.category.includes(searchTerm))
            return recipes

          }
        }));
        console.log("recipe search is returning!", res);
      })
      .catch((err) => console.log("error with search", err)) 
      
    }, [searchTerm])


  return (
    <>

  
<div class="container">

<div className='accountthing'>
                <Link className='login-link' to='/api/recipes/add'>Add recipes</Link>
                <Link className='login-link' to='/api/recipes/id'>User Recipes</Link>
            </div>


            <div className="searchThing">
     <form>
     <input
      onChange ={changeHandler}
      type="text"
      placeholder="search"
      value ={searchTerm}
      />
        {/* <button onSubmit={handleSubmit}>Search</button> */}
     </form>
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
            <hr />
          </div>
          </Card>
        ))}

      </div>
      </div>
    </>
  );
};

export default UserRecipes;