import React, { ChangeEvent, FC, useEffect, useState } from 'react';
// import s from "./ProfileInfo.module.css"
// import Preloader from "../../../Common/Preloader/Preloader";

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileStatusWithHooks: FC<PropsType> = (props) => {
  // let stateWithSetState = useState(true);
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);

    props.updateStatus(status);
  };

  const onStatusChange = (element: ChangeEvent<HTMLInputElement>) => {
    // console.log(element.currentTarget.value);
    setStatus(element.currentTarget.value);
    // console.log(this.state.status);
  };
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];

  return (
    <div>
      {!editMode && (
        <div>
          <b>Status: </b>
          <span onDoubleClick={activateEditMode}>{props.status || '------------'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            // ref={this.statusInputRef}
            onChange={onStatusChange}
            value={status}
            onBlur={deactivateEditMode}
            autoFocus={true}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
