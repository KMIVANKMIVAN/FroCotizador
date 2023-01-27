import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../constants";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "red",
};
const linkStyle2 = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <nav class="navbar navbar-expand-sm navbar-dark shadow p-3 mb-5 rounded">
      <div class="container-fluid">
        <a class="navbar-brand" to="/">
          <img
            src={require("../assets/img/logo.png")}
            alt=""
            width="100"
            height="70"
            class="d-inline-block align-text-top"
          />
        </a>
        <ul class="navbar-nav ">
          <li class="nav-item">
            {authToken ? (
              <div
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN);
                  navigate(`/`);
                }}
                style={linkStyle}
              >
                Salir
              </div>
            ) : (
              <Link to="/" style={linkStyle2}>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
