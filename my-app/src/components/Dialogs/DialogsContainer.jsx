import React from "react"
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import { Connect } from "react-redux";
import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";

// const DialogsContainer = (props) => {


//   // let state = props.store.getState().dialogsPage;

//   // let onSendMessageClick = () => {
//   //   props.store.dispatch(sendMessageCreator())
//   // }

//   // let onNewMessageChange = (body) => {
//   //   props.store.dispatch(updateNewMessageBodyCreator(body))
//   // }

//   return (

//     <StoreContext.Consumer>
//       {
//         (store) => {
//           debugger
//           let state = store.getState().dialogsPage;

//           let onSendMessageClick = () => {
//             store.dispatch(sendMessageCreator())
//           }

//           let onNewMessageChange = (body) => {
//             store.dispatch(updateNewMessageBodyCreator(body))
//           }
//           return (
//             <Dialogs
//               updateNewMessageBody={onNewMessageChange}
//               sendMessage={onSendMessageClick}
//               dialogsPage={state}
//             />
//           )
//         }

//       }

//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;