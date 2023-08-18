import React from "react";
import s from "./Users.module.css";
// import userPhoto from "../../assets/images/userphoto.png"
// import { NavLink } from "react-router-dom";
// // import axios from "axios";
// import { usersAPI } from "../API/api";
// import { Formik, Form, Field, ErrorMessage } from 'formik';


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => {
        return <span
          className={currentPage === page ? s.selectedPage : ''}
          onClick={() => { onPageChanged(page) }}
        >{page}</span>
      })}
    </div>
  )
}


export default Paginator
