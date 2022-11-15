import React from "react";

export const QuestionsCheckList = ({ user, changeStatus }) => {
  const {
    name,
    citizenship,
    livingInNorway,
    skillWorkerPermit,
    intendToStayLongTime,
  } = user;

  return (
    <div className="questions">
      <input
        type="checkbox"
        id="citizenship"
        onClick={changeStatus}
        defaultChecked={citizenship}
      />{" "}
      <label htmlFor="citizenship">Are you a citizenship of Norway?</label>
      <br />
      <input
        type="checkbox"
        id="livingInNorway"
        onClick={changeStatus}
        defaultChecked={livingInNorway}
      />{" "}
      <label htmlFor="livingInNorway">Are you living in Norway now?</label>
      <br />
      <input
        type="checkbox"
        id="skillWorkerPermit"
        onClick={changeStatus}
        defaultChecked={skillWorkerPermit}
      />{" "}
      <label htmlFor="skillWorkerPermit">
        Do you have a job skilled worker residence permit?
      </label>
      <br />
      <input
        type="checkbox"
        id="intendToStayLongTime"
        onClick={changeStatus}
        defaultChecked={intendToStayLongTime}
      />{" "}
      <label htmlFor="intendToStayLongTime">
        Do you intend to stay for a long time?
      </label>
    </div>
  );
};
export default QuestionsCheckList;
