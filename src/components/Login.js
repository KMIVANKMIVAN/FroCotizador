import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { AUTH_TOKEN } from "../constants";
import { Link } from "react-router-dom";
const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      usuario {
        id
        nombres
        estado
        rol {
          id
          rol
        }
        sucursal {
          id
          sucursal
        }
        empresa {
          id
          razon_social
        }
      }
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    correo: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      loginInput: {
        correo: formState.correo,
        password: formState.password,
      },
    },
    onCompleted: ({ login }) => {
      if (login.usuario.estado) {
        localStorage.setItem(AUTH_TOKEN, login.token);
        if (login.usuario.rol.rol === "Administrador") {
          navigate("/menuadmin");
        } else {
          navigate("/menu");
        }
      } else {
        navigate("/");
      }
    },
  });

  const [password, setPasswordValue] = React.useState("password");
  const toggle = () => {
    if (password === "password") {
      setPasswordValue("text");
      return;
    }
    setPasswordValue("password");
  };

  if (error) {
    return (
      <div>
        <div class="alert alert-danger" role="alert">
          <h4>{error.message};</h4>
        </div>
        <div class="container w-75 mt-5 mb-5 rounded shadow">
          <div class="row align-items-stretch">
            <div class="col p-2 d-none d-lg-block rounded ">
              <img
                src={require("../assets/img/login.jpg")}
                class="rounded"
                width="100%"
              />
            </div>
            <div class="col rounded">
              <div class="text-left text-white">
                <h2 class="fw-bold text-center py-5">Bienvenido</h2>
                <div class="mb-4">
                  <label for="user" class="for-label">
                    Correo
                  </label>
                  <input
                    class="form-control"
                    value={formState.correo}
                    onChange={e =>
                      setFormState({
                        ...formState,
                        correo: e.target.value,
                      })
                    }
                    type="text"
                  />
                </div>
                <div class="mb-4">
                  <label for="password" class="for-label">
                    Contraseña
                  </label>
                  <input
                    class="form-control"
                    value={formState.password}
                    onChange={e =>
                      setFormState({
                        ...formState,
                        password: e.target.value,
                      })
                    }
                    type={password}
                  />
                  <a className="btn btn-primary" onClick={toggle}>
                    {password === "password" ? (
                      <svg
                        width="20"
                        height="17"
                        fill="currentColor"
                        className="bi bi-eye-slash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="17"
                        fill="currentColor"
                        className="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>
                    )}
                  </a>
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary" onClick={login}>
                    Iniciar Sesion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="container w-75 mt-5 mb-5 rounded shadow">
      <div class="row align-items-stretch">
        <div class="col p-2 d-none d-lg-block rounded ">
          <img
            src={require("../assets/img/login.jpg")}
            class="rounded"
            width="100%"
          />
        </div>
        <div class="col rounded">
          <div class="text-left text-white">
            <h2 class="fw-bold text-center py-5">Bienvenido</h2>
            <div class="mb-4">
              <label for="user" class="for-label">
                Correo
              </label>
              <input
                class="form-control"
                value={formState.correo}
                onChange={e =>
                  setFormState({
                    ...formState,
                    correo: e.target.value,
                  })
                }
                type="text"
              />
            </div>
            <div class="mb-4">
              <label for="password" class="for-label">
                Contraseña
              </label>
              <input
                class="form-control"
                value={formState.password}
                onChange={e =>
                  setFormState({
                    ...formState,
                    password: e.target.value,
                  })
                }
                type={password}
              />
              <a className="btn btn-primary" onClick={toggle}>
                {password === "password" ? (
                  <svg
                    width="20"
                    height="17"
                    fill="currentColor"
                    className="bi bi-eye-slash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="17"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                )}
              </a>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary" onClick={login}>
                Iniciar Sesion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
