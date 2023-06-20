import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }
  activateEditMode = () => {
    this.setState(
      {
        editMode: true
      }
    )
    this.state = true;
  }
  deactivateEditMode = () => {
    this.setState(
      {
        editMode: false
      }
    )
    this.state = false;
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