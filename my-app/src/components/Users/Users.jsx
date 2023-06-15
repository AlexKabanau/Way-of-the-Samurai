import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userphoto.png"
import { NavLink } from "react-router-dom";
// import axios from "axios";
import { usersAPI } from "../API/api";


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return <span
            className={props.currentPage === page ? s.selectedPage : ''}
            onClick={() => { props.onPageChanged(page) }}
          >{page}</span>
        })}
      </div>
      {props.users.map(user =>
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} alt="User Photo" />
              </NavLink>
            </div>
            <div>
              {user.followed
                ? <button onClick={() => { 
                  usersAPI.unfollowUser(user.id)
                  .then(data => {
                    // debugger
                    if (data.resultCode === 0) {
                      props.unfollow(user.id) 
                    }
                  });
                }}>Unfollow</button>
                : <button onClick={() => { 
                  usersAPI.followUser(user.id)
                  .then(data => {
                    debugger
                    if (data.resultCode === 0) {
                      props.follow(user.id) 
                    }
                  });
                }}>Follow</button>
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
