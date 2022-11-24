import React, { useState } from "react";
import FormInputs from "./FormInputs";
import style from "./formValidation.module.css";

const FormValidationWithHtmlAndCss = () => {
  const [submitWithEmptyFields, setSubmitWithEmptyFields] = useState(false);
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      placeholder: "User Name",
      type: "text",
      label: "User Name",
      errorMessage:
        "User name should be 3-16 characters and don't include any special character",
      pattern: "[A-Za-z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email address",
      type: "email",
      label: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      placeholder: "Your Birthday",
      type: "date",
      label: "Birthday",
      errorMessage: "",
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      type: "password",
      label: "Password",
      errorMessage:
        "Must contain at least one letter and one number and be 8-16 characters!",
      pattern: "^(?=.*[0-9])(?=.*[a-z]).{6,16}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      placeholder: "Repeat password",
      type: "password",
      label: "Confirm Password",
      errorMessage: "password don't match",
      pattern: values.password,
      required: true,
    },
  ];

  const onChangeValues = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]:
        [e.target.name] === "birthday"
          ? e.target.value.toString()
          : e.target.value,
    });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (
      window.confirm("Are you sure you want to send the form to the Server?")
    ) {
      window.alert(JSON.stringify(values, undefined, 4));
      console.log(values);
    }
  };
  const checkEmptyFields = () => {
    if (
      !values.userName.length ||
      !values.email.length ||
      !values.password.length ||
      !values.confirmPassword.length
    ) {
      setSubmitWithEmptyFields(true);
    }
  };

  return (
    <div className={style.fullBackground}>
      <div>
        <form className={style.form} onSubmit={onSubmitForm}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInputs
              isEmptyForm={submitWithEmptyFields}
              key={input.id}
              {...input}
              value={values[input.name]}
              onChangeValues={onChangeValues}
            />
          ))}
          <div>
            <button onClick={checkEmptyFields} className={style.button}>
              submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidationWithHtmlAndCss;
