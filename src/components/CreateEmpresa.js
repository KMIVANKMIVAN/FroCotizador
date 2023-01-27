import React, { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const CREATE_EMPRESA_MUTATION = gql`
  mutation CrearEmpresa($createEmpresaInput: CreateEmpresaInput!) {
    CrearEmpresa(createEmpresaInput: $createEmpresaInput) {
      id
    }
  }
`;

const TIPO_EMPRESA_QUERY = gql`
  query MostrarTipoEmpresa {
    MostrarTipoEmpresa {
      id
      tipo
    }
  }
`;

const CreateEmpresa = () => {
  const { data: data4 } = useQuery(TIPO_EMPRESA_QUERY);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    razon_social: "",
    nit_empresa: "",
    direccion_empresa: "",
    pagina_web_empresa: "",
    telefono_empresa: "",
    linea_gratuita: "",
    celular_empresa: "",
    correo_empresa: "",
    tipo_empresas_id: 1,
  });

  const [createEmpresa, { error }] = useMutation(CREATE_EMPRESA_MUTATION, {
    variables: {
      createEmpresaInput: {
        razon_social: formState.razon_social,
        nit_empresa: formState.nit_empresa,
        direccion_empresa: formState.direccion_empresa,
        pagina_web_empresa: formState.pagina_web_empresa,
        telefono_empresa: formState.telefono_empresa,
        linea_gratuita: formState.linea_gratuita,
        celular_empresa: formState.celular_empresa,
        correo_empresa: formState.correo_empresa,
        tipo_empresas_id: formState.tipo_empresas_id,
      },
    },
    onCompleted: () => navigate("/menuadmin"),
  });

  if (error) return `Submission error! ${error.message}`;

  return (
    <form
      class="row g-3"
      onSubmit={e => {
        e.preventDefault();
        createEmpresa();
      }}
    >
      <h2 class="text-white">Registrar Empresa</h2>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              value={formState.razon_social}
              onChange={e =>
                setFormState({
                  ...formState,
                  razon_social: e.target.value,
                })
              }
            />
            <label for="Empresa" class="for-label">
              Razon Social
            </label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              value={formState.nit_empresa}
              onChange={e =>
                setFormState({
                  ...formState,
                  nit_empresa: e.target.value,
                })
              }
            />
            <label for="NitEmpresa" class="for-label">
              Nit Empresa
            </label>
          </div>
        </div>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              value={formState.direccion_empresa}
              onChange={e =>
                setFormState({
                  ...formState,
                  direccion_empresa: e.target.value,
                })
              }
            />
            <label for="DireccionEmpresa" class="for-label">
              Direccion Empresa
            </label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              value={formState.pagina_web_empresa}
              onChange={e =>
                setFormState({
                  ...formState,
                  pagina_web_empresa: e.target.value,
                })
              }
            />
            <label for="PaginaWebEmpresa" class="for-label">
              Pagina Web Empresa
            </label>
          </div>
        </div>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              value={formState.telefono_empresa}
              onChange={e =>
                setFormState({
                  ...formState,
                  telefono_empresa: e.target.value,
                })
              }
            />
            <label for="TelefonoEmpresa" class="for-label">
              Telefono Empresa
            </label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              value={formState.linea_gratuita}
              onChange={e =>
                setFormState({
                  ...formState,
                  linea_gratuita: e.target.value,
                })
              }
            />
            <label for="LineaGratuita" class="for-label">
              Linea Gratuita
            </label>
          </div>
        </div>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              value={formState.celular_empresa}
              onChange={e =>
                setFormState({
                  ...formState,
                  celular_empresa: e.target.value,
                })
              }
            />
            <label for="CelularEmpresa" class="for-label">
              Celular Empresa
            </label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              value={formState.correo_empresa}
              onChange={e =>
                setFormState({
                  ...formState,
                  correo_empresa: e.target.value,
                })
              }
            />
            <label for="CelularEmpresa" class="for-label">
              Correo Empresa
            </label>
          </div>
        </div>
      </div>
      <div class="row g-2">
        <div class="col-md-2">
          <div class="form-floating">
            <select
              class="form-select"
              value={formState.tipo_empresas_id}
              onChange={e =>
                setFormState({
                  ...formState,
                  tipo_empresas_id: parseInt(e.target.value),
                })
              }
            >
              {data4 && (
                <>
                  {data4.MostrarTipoEmpresa.map(MostrarTipoEmpresa => (
                    <option value={MostrarTipoEmpresa.id}>
                      {MostrarTipoEmpresa.tipo}
                    </option>
                  ))}
                </>
              )}
            </select>
            <label for="Sucural" class="for-label">
              Tipo Empresa
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

export default CreateEmpresa;
