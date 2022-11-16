import React, { useState, useEffect } from "react";
import FormPreview from "./FormPreview";
import SubmitButton from "./SubmitButton";
import QuestionsCheckList from "./QuestionsCheckList";
import UsersListShow from "./UsersListShow";
import NameInput from "./NameInput";
import "./checkBox.css";

const CheckBoxForm = () => {
  const [userInformation, setUserInformation] = useState({
    name: "",
    citizenship: false,
    livingInNorway: false,
    skillWorkerPermit: false,
    intendToStayLongTime: false,
  });
  const [isValidToStay, setIsValidToStay] = useState(false);
  const [acceptedUser, setAcceptedUser] = useState([]);

const addUser =()=>{

  const response = window.confirm("Are you sure you want to add the Applicant ?");

if (response) {
  setAcceptedUser([...acceptedUser , userInformation])
  setUserInformation({
    name: "",
    citizenship: false,
    livingInNorway: false,
    skillWorkerPermit: false,
    intendToStayLongTime: false,
  })

} else {
    // add code if the user pressed the Cancel button
    console.log("Cancel was pressed");
}


  
 
 // console.log(acceptedUser)
}

  const changeCheckStatus = (e) => {
    switch (e.target.id) {
      case "citizenship":
        setUserInformation({
          ...userInformation,
          citizenship: !userInformation.citizenship,
        });
        break;

      case "livingInNorway":
        setUserInformation({
          ...userInformation,
          livingInNorway: !userInformation.livingInNorway,
        });
        break;

      case "skillWorkerPermit":
        setUserInformation({
          ...userInformation,
          skillWorkerPermit: !userInformation.skillWorkerPermit,
        });
        break;

      case "intendToStayLongTime":
        setUserInformation({
          ...userInformation,
          intendToStayLongTime: !userInformation.intendToStayLongTime,
        });
        break;
    }
  };
const nameUpdater= (name)=>{
setUserInformation({...userInformation , name: name.target.value})
}
  return (
    <div>
      <div className="flex">
        <div>
          <div>
            <NameInput key={acceptedUser.length} changeName={nameUpdater} />
          </div>
          <br />
          <div>
            <QuestionsCheckList key={acceptedUser.length}    // key added because of restarting this component after add each person to array.
              user={userInformation}
              changeStatus={changeCheckStatus}
            />
          </div>
        </div>
        <div className="formPreviewContainer">
          <FormPreview user={userInformation} isAcceptable={setIsValidToStay} />
        </div>
      </div>

      <div>
        {isValidToStay ? <SubmitButton onSubmet={addUser} />  : ''}

      </div>
      <div>
        <UsersListShow users={acceptedUser}/>
      </div>
    </div>
  );
};

export default CheckBoxForm;
