import React from 'react'
import UserItem from './usersItem'
import './userList.css'

const userList = ({items}) => {
  if(items.length === 0){
    return(
      <div className='center'>
        <h2>user not found!</h2>
      </div>
    );
  }
  return (
      <ul className='users-list'>
        {items.map((user)=>(
          <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placecount={user.places}
          />
        ))}
      </ul>
  );
}

export default userList