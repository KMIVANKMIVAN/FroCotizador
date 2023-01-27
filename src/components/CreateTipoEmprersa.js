import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const CREATE_TIPO_EMPRESA_MUTATION = gql`
  mutation CrearTipoEmpresa($createTipoEmpresaInput: CreateTipoEmpresaInput!) {
    CrearTipoEmpresa(createTipoEmpresaInput: $createTipoEmpresaInput) {
      id
    }
  }
`;

const CreateTipoEmprersa = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    tipo: null,
  });

  const [createTipoEmpresa, { error }] = useMutation(
    CREATE_TIPO_EMPRESA_MUTATION,
    {
      variables: {
        createTipoEmpresaInput: {
          tipo: formState.tipo,
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
        createTipoEmpresa();
      }}
    >
      <h2 class="text-white">Registrar Empresa</h2>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="Interna o Externa"
              value={formState.tipo}
              onChange={e =>
                setFormState({
                  ...formState,
                  tipo: e.target.value,
                })
              }
            />
            <label for="Empresa" class="for-label">
              Tipo
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

export default CreateTipoEmprersa;
