import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "src/actions/userActions";
import { Button } from "@chakra-ui/react";
import Calendar from "src/media/undraw_calendar.svg";
import LoadContext from "src/contexts/LoadContext";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  const { auth } = state;
  return { user: auth.user };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...userAction }, dispatch)
});

const isMobile = window.innerWidth <= 640;

const Login = ({ actions, user }) => {
  const [error, setError] = useState(false);
  const { setLoading } = useContext(LoadContext);

  if (sessionStorage.getItem("token")) window.location.pathname = "/calendario";

  const onLogin = async () => {
    setLoading(true);
    try {
      const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      };
      await actions.userLogin(data);
    } catch (err) {
      console.error(err)
    }
    setLoading(false);
  };

  useEffect(() => {
    if (typeof user === "string" || user.length === 0) {
      setError(user);
    } else {
      sessionStorage.setItem("token", JSON.stringify(user._id));
      window.location.pathname = "/calendario";
    }
  }, [user]);

  if (isMobile) {
    return (
      <div
        className="flex items-center px-10 w-screen"
        style={{ height: window.innerHeight }}
      >
        <div className="flex flex-wrap h-1/4">
          <h1>Login.</h1>
          <div className="w-full text-center">
            <input
              id="email"
              type="text"
              className="form-input form-control"
              placeholder="Email"
            />
            <input
              id="password"
              type="password"
              className="form-input form-control"
              placeholder="Password"
            />
            <Button
              colorScheme="purple"
              size="md"
              onClick={onLogin}
            >
              LOGIN
            </Button>
          </div>
          {error && <p className="text-red-700">{error}</p>}
          <p className="absolute bottom-10 text-gray-400">Don't have an account? <Link className="underline hover:text-purple-600" to="/csubscribe">Click here.</Link></p>
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
      <div className="h-full flex items-center px-10 w-1/3 bg-gray-50 border-gray-100 shadow-lg">
        <div className="flex flex-wrap h-1/4">
          <h1>Login.</h1>
          <div className="w-full text-center">
            <input
              id="email"
              type="text"
              className="form-input form-control"
              placeholder="Email"
            />
            <input
              id="password"
              type="password"
              className="form-input form-control"
              placeholder="Password"
            />
            <Button
              colorScheme="purple"
              size="md"
              onClick={onLogin}
            >
              LOGIN
            </Button>
          </div>
          {error && <p className="text-red-700">{error}</p>}
          <p className="absolute bottom-10 text-gray-400">Don't have an account? <Link className="underline hover:text-purple-600" to="/csubscribe">Click here.</Link></p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.any.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);