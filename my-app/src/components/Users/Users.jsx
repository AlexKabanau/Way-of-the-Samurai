import React from "react";
import s from "./Users.module.css";

const Users = (props) => {

  if (props.users.lenght === 0) {
    props.setUsers([
      {id: 1, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', counry: 'Belarus'}, followed: false, },
      {id: 2, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Alesha', status: 'I am a boss too', location: {city: 'Moscow', counry: 'Russia'}, followed: true, },
      {id: 3, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Alex', status: 'I am a boss too too', location: {city: 'Kiev', counry: 'Ukrainw'}, followed: false, },
    ]);

  }

  return (
    <div>
      {props.users.map(user => 
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} className={s.userPhoto}/>
            </div>
            <div>
              { user.followed
              ? <button onClick={ () => {props.unfollow(user.id)} }>Unfollow</button> 
              : <button onClick={ () => {props.follow(user.id)} }>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.location.city}</div>
                <div>{user.location.country}</div>
              </span>
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

export default Users