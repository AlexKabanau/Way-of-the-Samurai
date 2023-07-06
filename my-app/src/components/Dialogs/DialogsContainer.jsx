// import React from "react"
import {  sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import { Connect } from "react-redux";
import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
// import StoreContext from "../../StoreContext";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      // debugger
      dispatch(sendMessageCreator(newMessageBody))
    },
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);