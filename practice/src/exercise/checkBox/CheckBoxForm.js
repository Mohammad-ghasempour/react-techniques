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
            <NameInput changeName={nameUpdater} />
          </div>
          <br />
          <div>
            <QuestionsCheckList
              user={userInformation}
              changeStatus={changeCheckStatus}
            />
          </div>
        </div>
        <div className="formPreviewContainer">
          <FormPreview user={userInformation} />
        </div>
      </div>

      <div>
        <SubmitButton />

        <UsersListShow/>
      </div>
    </div>
  );
};

export default CheckBoxForm;
