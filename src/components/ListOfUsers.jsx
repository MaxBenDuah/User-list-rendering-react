import React from "react";
import List from "./List";

const ListOfUsers = function ({users}) {
  return (
    <ul>
      {users.map(user => <List key={user.id} user={user} />)}
    </ul>
  );
}

export default ListOfUsers;