import React, { useState } from "react";
import AddUser from "./Components/Users/addUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [UsersList, setUsersList] = useState([]);

  const AddUsers = (uname, uage) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAdd={AddUsers} />
      <UserList users={UsersList} />
    </div>
  );
}

export default App;
