import React, { useEffect, useState } from "react";
import { Card, Button } from "reactstrap";
import UserRecipes from "./userRecipes";
import { authentication } from "../utils/authentication";

const Profile = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    authentication()
      .get("/api/users")
      .then((res) => {
        setMembers(res.data);
        console.log(members);
        console.log(members);
      })
      .catch((err) => console.log(err));
  }, [members]);
  return (
    <div>
      <Card>
        <h1>Hello Welcome Back, (Add usernames later)</h1>

        <UserRecipes />
        <Button
          style={{ margin: "20px auto", width: "20%" }}
          href="/CreateRecipe"
        >
          Add New Recipe
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
