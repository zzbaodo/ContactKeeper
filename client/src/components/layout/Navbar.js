import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logOut, user } = authContext;
  const onLogOut = () => {
    logOut();
    contactContext.clearContact();
  };
  const authLink = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link onClick={onLogOut} to="/login">
          Logout
        </Link>
      </li>
    </Fragment>
  );
  const guestLink = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>{isAuthenticated ? authLink : guestLink}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
};
export default Navbar;
