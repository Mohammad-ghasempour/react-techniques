import React from 'react';
import "./loginform.css"

const LoginBox = (props) => {
    return (
     <>
        <div className='centerPage colorDiv'>
        <h2>  Login </h2>
            <div>
                <form>
                    <label htmlFor='userName'>User name: </label><input id='userName'/> <br/>
                    <label htmlFor='password'>Password : </label><input id='password'/>
                </form>
            </div>
            
            <div>
                <div className='loginContainer'><button className='loginButton' onClick={props.login}>LOGIN</button></div>

                <div style={{marginTop: '15%'}}>Not a member?  <span className='signUpNow' onClick={props.action}>Signup now</span></div>
                
            </div>
        </div>
     </>
    );
}

export default LoginBox;
