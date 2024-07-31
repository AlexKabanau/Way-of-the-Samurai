// import React from "react"
import { actions } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
// import { Connect } from "react-redux";
import { connect } from 'react-redux';
// import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
// import StoreContext from "../../StoreContext";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(connect(mapStateToProps, { ...actions }), withAuthRedirect)(Dialogs);
