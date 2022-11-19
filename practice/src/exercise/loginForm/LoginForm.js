import React, { useState } from "react";
import LoginBox from "./LoginBox";
import SignUpBox from "./SignUpBox";
import LoggedInPage from "./LoggedInPage";

const databaseUsersList = [
  {
    name: "Ali shokri",
    userName: "ali.shokri@gmail.com",
    password: "aliali",
    rePassword: "aliali",
  },
];
const LoginForm = () => {
  const [users, setUsers] = useState(5);

  const addNewUserToDatabase = (event) => {
    databaseUsersList.push(event);
    console.log(databaseUsersList);
  };

  const toSignUp = () => {
    setShowPage(
      <SignUpBox action={toLoginBox} addToDB={addNewUserToDatabase} />
    );
  };
  const toLoginBox = () => {
    setShowPage(<LoginBox action={toSignUp} />);
  };
  const toLoggedIn = () => {
    setShowPage(<LoggedInPage action={toLoginBox} />);
  };

  const [showPage, setShowPage] = useState(
    <LoginBox action={toSignUp} login={toLoggedIn} />
  );

  return (
    <>
      <div>{showPage}</div>
    </>
  );
};

export default LoginForm;
