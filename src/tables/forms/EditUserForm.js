import React, { userState, useEffect} from 'react'

const EditUserForm = props => {
    const [user, setUser] = userState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [ props ] 
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value})
    }

    return(
        <form
          onSubmit={event => {
            event.preventDefault()
            props.updateUser(user.id, user)
          }}
        >
        
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange= {handleInputChange}/>
        <label>Username</label>
        <input type="text" name="username" value={user.username} onChange= {handleInputChange}/>

        <button>Modifier</button>
        <button onClick={()=> props.setEditing(false)} className="button muted-button">
            Annuler
        </button>
        </form>
    )
}

export default EditUserForm