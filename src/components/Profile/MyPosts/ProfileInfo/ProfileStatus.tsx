import React, { ChangeEvent, ChangeEventHandler } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader';

type PropsType = {
  status: string;

  updateStatus: (newStatus: string) => void;
};

type StateType = {
  editMode: boolean;
  status: string;
};

class ProfileStatus extends React.Component<PropsType, StateType> {
  // statusInputRef = React.createRef();

  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    // debugger
    this.setState({
      editMode: false,
    });
    // console.log(this.state.status)
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (element: ChangeEvent<HTMLInputElement>) => {
    // console.log(element.currentTarget.value);
    this.setState({
      status: element.currentTarget.value,
    });
    // console.log(this.state.status);
  };

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    // debugger
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }

    // let a = this.state;
    // let b = this.props;
    // debugger
    // console.log("ComponentDidUpdate")
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '------------'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              // ref={this.statusInputRef}
              onChange={this.onStatusChange}
              value={this.state.status}
              onBlur={this.deactivateEditMode.bind(this)}
              autoFocus={true}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
