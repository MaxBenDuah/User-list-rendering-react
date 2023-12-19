import React, {useState} from "react";

const Form = function ({onAddUser}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    const userDetails = {
      name,
      email,
      id: Date.now()
    };

    onAddUser(userDetails);

    setName("");
    setEmail("");
  }

  return (
    <div className="main-form">
      <h3>Please enter your name and email</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Form;