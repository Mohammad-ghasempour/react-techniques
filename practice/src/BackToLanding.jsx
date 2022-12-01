import React from 'react';
import "./App.css";

const BackToLanding = () => {
   
    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <>
        <button className="BackButton" onClick={()=>refreshPage()}>Back <b>↩</b></button>
        </>
    );
}

export default BackToLanding;
