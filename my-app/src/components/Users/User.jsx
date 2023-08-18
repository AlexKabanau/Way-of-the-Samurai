import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userphoto.png"
import { NavLink } from "react-router-dom";
// import axios from "axios";
import { usersAPI } from "../API/api";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Paginator from "./Paginator"

let User = ({  user, followingInProgress, unfollow, follow, ...props }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} alt="User Photo" />
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unfollow(user.id)
            }}>Unfollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id)
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
  )
}


export default User
