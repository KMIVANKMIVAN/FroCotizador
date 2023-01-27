import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const CREATE_ROL_MUTATION = gql`
  mutation CrearRol($createRolInput: CreateRolInput!) {
    CrearRol(createRolInput: $createRolInput) {
      id
    }
  }
`;

const CreateRol = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    rol: null,
  });

  const [createRol, { error }] = useMutation(
    CREATE_ROL_MUTATION,
    {
      variables: {
        createRolInput: {
          rol: formState.rol,
        },
      },
      onCompleted: () => navigate("/menuadmin"),
    }
  );

  if (error) return `Submission error! ${error.message}`;

  return (
    <form
      class="row g-3"
      onSubmit={e => {
        e.preventDefault();
        createRol();
      }}
    >
      <h2 class="text-white">Registrar Empresa</h2>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="Administrador, Agente, Ejecutivo"
              value={formState.rol}
              onChange={e =>
                setFormState({
                  ...formState,
                  rol: e.target.value,
                })
              }
            />
            <label for="Empresa" class="for-label">
              Rol
            </label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating"></div>
        </div>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <button class="btn btn-primary  text-white" type="submit">
              Registrar
            </button>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <Link class="btn btn-primary  text-white " to="/menuadmin">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateRol;
