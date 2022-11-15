import React from "react";

const FormPreview = ({ user }) => {
  const {
    name,
    citizenship,
    livingInNorway,
    skillWorkerPermit,
    intendToStayLongTime,
  } = user;

  return (
    <div>
      <p>
        Applicant name: <b>{name}</b>{" "}
      </p>
      <p>---------------</p>
      <p>
        He/She <b>{citizenship ? "is" : "is not"}</b> a citizenship on Norway.
      </p>
      <p>
        He/She <b>{livingInNorway ? "is" : "is not"}</b> living in Norway now.{" "}
      </p>
      <p>
        He/She <b>{skillWorkerPermit ? "has" : "doesn't have"}</b> a skills
        worker resident permit.{" "}
      </p>
      <p>
        {" "}
        <b>{((citizenship || skillWorkerPermit) || (!intendToStayLongTime))  ? "" : "But "}</b> He/She{" "}
        <b>{intendToStayLongTime ? "" : "doesn't"}</b> intend to stay in Norway
        for a long time.{" "}
      </p>
      <br/>
      <h3>The status will be show here...</h3>
    </div>
  );
};
export default FormPreview;
