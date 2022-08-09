import React from 'react';
import User from './Components/User';
import UserList from './Components/UserList';
import {useState} from 'react';


function App() {
  const [users, addUsers] = useState([]);

  const onAddUserHandler = (user) => {
    addUsers(prevState => {
      return [user, ...prevState];
    });
  }; 

  return (
    <div>
      <User handler={onAddUserHandler}/>
      <UserList userlist={users}/>
    </div>
  );
}

export default App;
