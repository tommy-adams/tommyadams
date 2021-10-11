import React, { useState, useEffect, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "src/actions/userActions";
import { Button } from "@chakra-ui/react"; 
import validPassword from "src/utils/validPassword";
import Calendar from "src/media/undraw_calendar.svg";
import LoadContext from "src/contexts/LoadContext";

const mapStateToProps = state => {
  const { auth: { user } } = state;
  return { user }; 
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...userAction }, dispatch)
});

const isMobile = window.innerWidth <= 640;

const Subscribe = ({ actions, user }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    email: "",
    password: ""
  });
  const [passwordValid, setPasswordValid] = useState(false);
  const { setLoading } = useContext(LoadContext);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        firstName: document.getElementById("firstName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      };
      await actions.createUser(payload);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (typeof user === "string") {
      setError(user);
    } else if (user.length !== 0) {
      sessionStorage.setItem("token", JSON.stringify(user._id));
      window.location.pathname = "/calendario";
    }
  }, [user]);

  const handleChange = e => {
    setData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));

    if (e.target.id === "password") {
      setPasswordValid(validPassword(e.target.value));
    }
  };

  const buttonDisabled = useMemo(() =>
    data.firstName === "" || data.email === "" || data.password === "" || !passwordValid,
    [data, passwordValid]
  );

  if (isMobile) {
    return (
      <div
        className="p-10 w-screen"
        style={{ height: window.innerHeight }}
      >
        <div className="flex flex-wrap h-1/4">
          <h1>Subscribe.</h1>
          <div className="w-full text-center">
            <input
              id="firstName"
              type="text"
              className="form-input form-control"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              id="email"
              type="text"
              className="form-input form-control"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              id="password"
              type="password"
              className="form-input form-control"
              placeholder="Password"
              onChange={handleChange}
            />
            {data.password !== "" && 
              <div className="w-full text-left mb-6">
                <p>Password must contain:</p>
                <ul>
                  <li>At least 10 characters</li>
                  <li>At least one number</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one special character</li>
                </ul>
              </div>
            }
            <Button
              colorScheme="purple"
              size="md"
              onClick={onSubmit}
              disabled={buttonDisabled}
            >
              SUBMIT
            </Button>
          </div>
          {error &&
            <p className="text-red-700">{error}</p>
          }
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex">
      <div className="h-full w-2/3 flex items-center justify-center">
        <div>
          <h1>Welcome to Calendario</h1>
          <p>...a new and improved way to track your assignments.</p>
        </div>
        <img src={Calendar} alt="Calendar" className="absolute left-10 bottom-0 h-80" />
      </div>
      <div className="h-full flex py-40 px-10 w-1/3 bg-gray-50 border-gray-100 shadow-lg">
        <div className="flex flex-wrap h-1/4">
          <h1>Subscribe.</h1>
          <div className="w-full text-center">
            <input
              id="firstName"
              type="text"
              className="form-input form-control"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              id="email"
              type="text"
              className="form-input form-control"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              id="password"
              type="password"
              className="form-input form-control"
              placeholder="Password"
              onChange={handleChange}
            />
            {data.password !== "" &&
              <div className="w-full text-left mb-6 bg-gray-200 rounded-md p-2">
                <p>Password must contain:</p>
                <ul>
                  <li>At least 10 characters</li>
                  <li>At least one number</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one special character</li>
                </ul>
              </div>
            }
            <Button
              disabled={buttonDisabled}
              colorScheme="purple"
              size="md"
              onClick={onSubmit}
            >
              SUBMIT
            </Button>
          </div>
          {error &&
            <p className="text-red-700">{error}</p>
          }
        </div>
      </div>
    </div>
  );
};

Subscribe.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.any.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);