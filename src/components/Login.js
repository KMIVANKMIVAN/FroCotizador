import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { AUTH_TOKEN } from "../constants";

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
          nit_empresa
          direccion_empresa
          pagina_web_empresa
          telefono_empresa
          linea_gratuita
          celular_empresa
          correo_empresa
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
  // c369bq@gmail.com
  // 8433318Van
  // ataly777@gmail.com
  // Nataly123l
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

  if (error) return `Submission error! ${error.message}`;

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
                type="password"
              />
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
