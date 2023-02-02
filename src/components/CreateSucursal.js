import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const CREATE_SUCURSAL_MUTATION = gql`
  mutation CrearSucursal($createSucursalInput: CreateSucursalInput!) {
    CrearSucursal(createSucursalInput: $createSucursalInput) {
      id
    }
  }
`;

const CreateSucursal = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    sucursal: null,
  });

  const [createSucursal, { error }] = useMutation(
    CREATE_SUCURSAL_MUTATION,
    {
      variables: {
        createSucursalInput: {
          sucursal: formState.sucursal,
        },
      },
      onCompleted: () => navigate("/menuadmin"),
    }
  );

  if (error) {
    return (
      <div class="alert alert-danger" role="alert">
        <h4>¡Error de envío! {error.message};</h4>
        <div class="col-md">
          <div class="form-floating">
            <Link class="btn btn-primary  text-white" to="/menuadmin">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      class="row g-3"
      onSubmit={e => {
        e.preventDefault();
        createSucursal();
      }}
    >
      <h2 class="text-white">Registrar Sucursal</h2>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="La Paz..."
              value={formState.sucursal}
              onChange={e =>
                setFormState({
                  ...formState,
                  sucursal: e.target.value,
                })
              }
            />
            <label for="Empresa" class="for-label">
              Sucursal
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

export default CreateSucursal;
