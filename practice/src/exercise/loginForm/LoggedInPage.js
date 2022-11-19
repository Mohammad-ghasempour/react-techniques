import React from 'react';

const LoggedInPage = (props) => {
    return (
        <div>
            <div>
            <div className='headerLoggedInPage'>
                Welcomt 'User' !
                <br/>
                <div><span className='signUpNow' onClick={props.action}> Log off </span></div>
            </div>
            
            </div>
            
            <div style={{marginTop: '100px'}}>
                <h3>Information about user.....</h3>
            </div>

        </div>
    );
}

export default LoggedInPage;
