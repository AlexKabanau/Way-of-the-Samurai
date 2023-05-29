import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/userphoto.png"

const Users = (props) => {
  debugger



  if (props.users.length === 0) {
    debugger

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items)
      })
    // props.setUsers([
    //   {id: 1, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', counry: 'Belarus'}, followed: false, },
    //   {id: 2, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Alesha', status: 'I am a boss too', location: {city: 'Moscow', counry: 'Russia'}, followed: true, },
    //   {id: 3, photoUrl: 'https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png', fullName: 'Alex', status: 'I am a boss too too', location: {city: 'Kiev', counry: 'Ukrainw'}, followed: false, },
    // ]);

  }

  return (
    <div>
      {props.users.map(user =>
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} />
            </div>
            <div>
              {user.followed
                ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(user.id) }}>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
              </span>
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

export default Users