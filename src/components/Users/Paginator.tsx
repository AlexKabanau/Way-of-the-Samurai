import React, { FC, useState } from 'react';
// import s from "./Users.module.css";
import style from './Paginator.module.css';
// import userPhoto from "../../assets/images/userphoto.png"
// import { NavLink } from "react-router-dom";
// // import axios from "axios";
// import { usersAPI } from "../API/api";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import cn from 'classnames';

type PropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  portionsSize?: number;
};
let Paginator: FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionsSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionsSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionsSize + 1;
  let rightPortionPageNumber = portionNumber * portionsSize;

  return (
    <div className={style.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => {
          return (
            <span
              className={cn(
                {
                  [style.selectedPage]: currentPage === page,
                },
                style.pageNumber,
              )}
              // currentPage === page ? style.selectedPage : style.pageNumber}
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
