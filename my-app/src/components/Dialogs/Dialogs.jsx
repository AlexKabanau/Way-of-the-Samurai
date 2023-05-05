import React from "react"
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      Dialogs
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog}>
            Alex
          </div>
          <div className={`${s.dialog} ${s.active}`}>
            Dima
          </div>
          <div className={s.dialog}>
            Artiom
          </div>
          <div className={s.dialog}>
            Vadzim
          </div>
          <div className={s.dialog}>
            Dima
          </div>
          <div className={s.dialog}>
            Vlad
          </div>

        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>Hi hi</div>
          <div className={s.message}>WhatsApp</div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;