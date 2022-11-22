import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Inputfield from "./Inputfield";
import "./Form.css";

const FormValidationLibrary = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", ""); // second parameter is the default value!

  const [value, setValue] = useState({
    name: "",
    birthDate: new Date(),
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const submitForm = (e) => {
    setValue({
      name: e.name,
      birthDate: e.birthDate,
      userName: e.userName,
      password: e.password,
      confirmPassword: e.confirmPassword,
    });
    console.log(value);
  };

  return (
    <div className="fullPageDiv">
     
    <pre className="pre">
      {value.name && JSON.stringify(value, undefined, 2)}
    </pre>
  
  <div className="formBorder">
    <form onSubmit={handleSubmit(submitForm)}>
      {/* first test: <input name="first" {...register("firstExample")} />
    <br />
    Second test:{" "}
    <input
      name="secondExample"
      type="text"
      {...register("secondExample",{required: "this fiels is required!", minLength:{value: 3, message:"should be more than 3 characters."}})}
    />
    <br />
    {errors.secondExample && <span>{errors.secondExample.message}</span>} */}
      <Inputfield
        type="text"
        name="name"
        title="Name: "
        placeholder="Name"
        validator={{
          ...register("name", { required: "Name is Required!" }),
        }}
      />
      {/* {errors.name && <span className="error">Name is Required!</span>} */}
      <div className="spanContainer">
        {" "}
        {errors.name && (
          <span className="error">{errors.name.message}</span>
        )}
      </div>
      <Inputfield
        type="date"
        name="birthDate"
        title="Date of Birth: "
        placeholder="Date of birth"
        validator={{
          ...register("birthDate", { required: "Birth Date is Required!" }),
        }}
      />{" "}
      <div className="spanContainer">
        {" "}
        {errors.birthDate && (
          <span className="error">{errors.birthDate.message}</span>
        )}{" "}
      </div>
      <Inputfield
        type="text"
        name="userName"
        title="User Name: "
        placeholder="User name"
        validator={{
          ...register("userName", { required: "User name is Required!" }),
        }}
      />{" "}
      <div className="spanContainer">
        {" "}
        {errors.userName && (
          <span className="error">{errors.userName.message}</span>
        )}
      </div>
      <Inputfield
        type="password"
        name="password"
        title="Password: "
        placeholder="between 4 to 8 characters"
        validator={{
          ...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 4,
              message: "password should be more than 4 character",
            },
          }),
        }}
      />{" "}
      <div className="spanContainer">
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>
      <Inputfield
        type="password"
        name="confirmPassword"
        title="Confirm password: "
        placeholder="between 4 to 8 characters"
        validator={{
          ...register("confirmPassword", {
            validate: (value) => {
              return (
                value === password.current || "The passwords do not match"
              );
            },
          }),
        }}
      />{" "}
      <div className="spanContainer">
        {" "}
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}
      </div>
      <br />
      <button className="button">Submit</button>
    </form>
  </div>
</div>
  );
};

export default FormValidationLibrary;
