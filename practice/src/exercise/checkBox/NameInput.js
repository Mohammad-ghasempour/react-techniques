import React from "react";

export const NameInput = ({changeName}) => {
    return (
        <div>
            <label htmlFor="Name">Applicant Name: </label>
            <input type="text" id="Name" onChange={changeName} />
        </div>
    );
};
export default NameInput;
