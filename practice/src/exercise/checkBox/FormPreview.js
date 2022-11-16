import React , {useEffect} from "react";

const FormPreview = ({ user , isAcceptable }) => {
  const {
    name,
    citizenship,
    livingInNorway,
    skillWorkerPermit,
    intendToStayLongTime,
  } = user;
  
  useEffect(() => {
       isAcceptable(isAcceptableToStayInNorway); 
  });
  
  
  const isAcceptableToStayInNorway = ((citizenship) || (livingInNorway && skillWorkerPermit)) ? true : false
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
      <h2 style={{color: 'green'}}><b>{isAcceptableToStayInNorway ? '✓ Able to add' : ''}</b></h2>
    </div>
  );
};
export default FormPreview;
