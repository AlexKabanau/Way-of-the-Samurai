import React from "react";
import preloader from "../../../assets/images/Spinner-1s-200px.svg"

let Preloader = (props) => {
  return (
    <div>
        <img src={preloader} alt='Prealoder'/>
    </div>
  )
}

export default Preloader;