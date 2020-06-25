import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import { authentication } from "../utils/authentication";

const Users = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    authentication()
      .get("/api/users")
      .then((res) => {
        setMembers(res.data);
        console.log(members);
      })
      .catch((err) => console.log("No available users", err));
  }, []);

  return (
    <Card>
      <h1 style={{ marginLeft: "45%", width: "50%" }}>Users</h1>
      <div>
        {members.map((users) => {
          return (
            <Card key={users.id} style={{ margin: "20px auto", width: "20%" }}>
              <p style={{ marginLeft: "25%", marginTop: "10px" }}>
                Username: {users.username}
              </p>
              <p style={{ marginLeft: "25%" }}>First Name: {users.firstName}</p>
              <p style={{ marginLeft: "25%" }}>Last Name: {users.lastName}</p>
            </Card>
          );
        })}
      </div>
    </Card>
  );
};

export default Users;
