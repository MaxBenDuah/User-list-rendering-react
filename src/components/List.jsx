import React from "react";

const List = function ({user}) {
  return (
    <li>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </li>
  );
}

export default List;