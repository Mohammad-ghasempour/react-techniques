import React, { useState , useEffect } from "react";

const SignUpBox = (props) => {
  const [newUser, setNewUser] = useState({
    name: "",
    userName: "",
    password: "",
    rePassword: "",
  });
  const [error, setError] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  
  useEffect(() => {
    setIsPasswordMatch( newUser.password == newUser.rePassword ? true : false)    
  });

  const createNewUser = (e) => {
    switch (e.target.id) {
      case "name":
        setNewUser((prevNewUser) => {
          return { ...prevNewUser, name: e.target.value };
        });
        break;

      case "userName":
        setNewUser((prevNewUser) => {
          return { ...prevNewUser, userName: e.target.value };
        });
        break;

      case "password":
        setNewUser((prevNewUser) => {
          return { ...prevNewUser, password: e.target.value };
        });
        break;

      case "rePassword":
        setNewUser((prevNewUser) => {
          return { ...prevNewUser, rePassword: e.target.value };
        });
        break;
    }
  };

  const formIsValid = () => {
    if (
      newUser.name.length == 0 ||
      newUser.userName.length == 0 ||
      newUser.password.length == 0 ||
      newUser.rePassword.length == 0 ||
      newUser.password != newUser.rePassword
    ) {
      setError(true);
      setIsPasswordMatch( newUser.password == newUser.rePassword? true : false)
      return false;
    }
    else {
      setError(false);
      return true;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (formIsValid()) {
      let confirmAction = window.confirm("Are you sure to add this user?");
      if (confirmAction) {
        props.addToDB(newUser);
        setNewUser({
          name: "",
          userName: "",
          password: "",
          rePassword: "",
        });
        setTimeout(() => {
          props.action();
        }, 1000);
      } else {
        alert("Action canceled");
      }
    }
  };

  return (
    <div className="signUpPage colorDiv">
      <h2> sign up box </h2>
      <div>
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={newUser.name}
            onChange={createNewUser}
          />
          <br />
          <small style={{ color: "red" }}>
            {error && !newUser.name ? "Name can't be empty!" : ""}
          </small>
          <br />
          <br />
          <label htmlFor="userName">User name: </label>
          <input
            type="text"
            id="userName"
            value={newUser.userName}
            onChange={createNewUser}
          />
          <br />
          <small style={{ color: "red" }}>
            {error && !newUser.userName ? "User name is require!" : ""}
          </small>
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            value={newUser.password}
            onChange={createNewUser}
          />
          <br />
          <small style={{ color: "red" }}>
            {error && !newUser.password ? "Password is require!" : ""}
          </small>
          <br />
          <br />
          <label htmlFor="rePassword">Confirm password : </label>
          <input
            type="password"
            id="rePassword"
            value={newUser.rePassword}
            onChange={createNewUser}
          />
          <br />
          <small style={{ color: "red" }}>
            {error && !newUser.rePassword
              ? "Password Confirmation is require!"
              : ""}
          </small>
          <br />
          <small style={{ color: "red" }}>{!isPasswordMatch && (!(newUser.password.length==0 && newUser.rePassword.length==0)) ? "The password confirmation does not match." : "" }</small>
          <br />
          <button style={{ marginTop: "10%" }} className="loginButton">
            Submit
          </button>
        </form>
      </div>

      <br />

      <div>
        <button onClick={props.action}>Cancel</button>
      </div>
    </div>
  );
};

export default SignUpBox;
