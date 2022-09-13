import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const { showAlert, alertText, isLoading, displayAlert } = useAppContext();
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const [name, value] = [e.target.name, e.target.value];
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!name && !isMember)) {
      displayAlert();
      return;
    }
    console.log(values);
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />

        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        <FormRow
          type='text'
          name='name'
          handleChange={handleChange}
          labelText='name'
          value={values.name}
        />
        <FormRow
          type='email'
          name='email'
          handleChange={handleChange}
          labelText='email'
          value={values.email}
        />
        {!values.isMember && (
          <FormRow
            type='password'
            name='password'
            handleChange={handleChange}
            labelText='password'
            value={values.password}
          />
        )}
        <button type='submit' className='btn btn-block'>
          {!values.isMember ? "Register" : "Login"}
        </button>
        <p>
          {values.isMember ? "Not a member?" : "Already a member?"}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
