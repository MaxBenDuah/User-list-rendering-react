import React, {useState} from "react";
import Form from "./Form";
import ListOfUsers from "./ListOfUsers";

const App = function () {
  const [users, setUsers] = useState([]);

  const handleUser = (user) => {
    setUsers(prevUser => [...prevUser, user])
  }

  return (
    <>
      <Form onAddUser={handleUser} />
      <ListOfUsers users={users} />
    </>
  );
}

export default App;