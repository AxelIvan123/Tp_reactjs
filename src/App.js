import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './tables/forms/AddUserForm';
import EditUserForm from './tables/forms/EditUserForm';

const initialFormState = { id: null, name: '', username: ''}

const App = () => {
  const usersData = [
    { id: 1, name: 'Marius', username: 'theNothing'},
    { id: 2, name: 'Niemet', username: 'brokeDev'},
  ]

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing]= useState(false)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser= (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username})
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return(
    <div className="container">
      <h1>CRUD Application avec les Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />  
            </div>
          ) : (
            <div>
              <h2>Nouvel utilisateur</h2>
            <AddUserForm addUser={addUser}/>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Liste des utilisateurs</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )
}

export default App;
