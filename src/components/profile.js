import React from "react";
import { Card, Button } from "reactstrap";

const UserProfile = (props) => {
  return (
    <div>
      {props.profileArray.map((e, i) => {
        console.log(props.profileArray);
        return (
          <div key={i}>
            <Card>Username: {e.userName}</Card>
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
