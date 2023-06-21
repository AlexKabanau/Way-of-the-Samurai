import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";

class ProfileStatus extends React.Component {
  statusInputRef = React.createRef();
  
  state = {
    editMode: false,
    // status: this.props.status
  }
  activateEditMode = () => {
    this.setState(
      {
        editMode: true
      }
    )
  }
  deactivateEditMode = () => {
    this.setState(
      {
        editMode: false
      }
    )
    this.props.updateStatus(this.statusInputRef.current.value);
  }
  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input 
              ref={this.statusInputRef}
              value={this.props.status}
              onBlur={this.deactivateEditMode}
              autoFocus="true"></input>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;