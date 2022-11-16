import React from 'react';

const SubmitButton = ({onSubmet}) => {
    return (
        <div>
            <button onClick={onSubmet}>Add new user</button>
        </div>
    );
};
export default SubmitButton;
