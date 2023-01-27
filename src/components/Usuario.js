import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useMutation, useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom'
const USUARIOS_MUTATION = gql`
  mutation ActualizarUsuario($updateUsuarioInput: UpdateUsuarioInput!) {
    ActualizarUsuario(updateUsuarioInput: $updateUsuarioInput) {
      id
    }
  }
`;
const SUCURSAL_QUERY = gql`
  query MostrarSucursales {
    MostrarSucursales {
      id
      sucursal
    }
  }
`;
const USUARIOS_PASSWORD_MUTATION = gql`
  mutation ActualizarUsuario($updateUsuarioInput: UpdateUsuarioInput!) {
    ActualizarUsuario(updateUsuarioInput: $updateUsuarioInput) {
      id
    }
  }
`;

const Usuario = props => {
  const { usuarios } = props;
  const { data: data2 } = useQuery(SUCURSAL_QUERY);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    id: parseInt(usuarios.id),
    correo: usuarios.correo,
    estado: usuarios.estado,
    celular: usuarios.celular,
    telefono: usuarios.telefono,
    direccion_usuario: usuarios.direccion_usuario,
    pagina_web_usuario: usuarios.pagina_web_usuario,
  });
  const [form2State, set2FormState] = useState({
    id: parseInt(usuarios.id),
    password: null,
  });
  const [form3State, set3FormState] = useState({
    id: parseInt(usuarios.id),
    sucursalId: usuarios.sucursalId,
  });

  const [updateUsuario, { error: error1 }] = useMutation(USUARIOS_MUTATION, {
    variables: {
      updateUsuarioInput: {
        id: parseInt(formState.id),
        correo: formState.correo,
        estado: formState.estado,
        celular: formState.celular,
        telefono: formState.telefono,
        direccion_usuario: formState.direccion_usuario,
        pagina_web_usuario: formState.pagina_web_usuario,
      },
    },
    onCompleted: () => navigate("/menuadmin"),
  });
  const [update2Usuario, { error: error2 }] = useMutation(
    USUARIOS_PASSWORD_MUTATION,
    {
      variables: {
        updateUsuarioInput: {
          id: parseInt(form2State.id),
          password: form2State.password,
        },
      },
      onCompleted: () => navigate("/menuadmin"),
    }
  );
  const [update3Usuario, { error: error3 }] = useMutation(
    USUARIOS_PASSWORD_MUTATION,
    {
      variables: {
        updateUsuarioInput: {
          id: parseInt(form3State.id),
          sucursalId: form3State.sucursalId,
        },
      },
      onCompleted: () => navigate("/menuadmin"),
    }
  );

  if (error1) return `Submission error! ${error1.message}`;
  if (error2) return `Submission error! ${error2.message}`;

  return (
    <div>
      <div class="card border-light bg-transparent text-white">
        <div class="card-body">
          <h4 class="card-title">Datos Personales</h4>
          <h5 class="card-text">
            {usuarios.id}: {usuarios.ap_paterno} {usuarios.ap_materno} {}
            {usuarios.ap_casado} {usuarios.nombres}. Numero de Carnet:{" "}
            {usuarios.numero_carnet} {usuarios.extesion} Con Nit:{" "}
            {usuarios.nit_usuario ? usuarios.nit_usuario : "Sin Nit"}
          </h5>
          <h4 class="card-title">Estado</h4>
          <h5 class="card-text">{usuarios.estado ? "Activo" : "Inactivo"}</h5>
          <h4 class="card-title">Contactos Personales</h4>
          <h5 class="card-text">
            Correo: {usuarios.correo} Celular: {usuarios.celular} Telefono:{" "}
            {usuarios.telefono} {}
            Direccion: {usuarios.direccion_usuario} Pagina Web{" "}
            {usuarios.pagina_web_usuario}
          </h5>
          <h4 class="card-title">Tipo de Rol</h4>
          <h5 class="card-text">{usuarios.rol.rol}</h5>
          <h4 class="card-title">Empresa</h4>
          <h5 class="card-text">
            {usuarios.empresa.razon_social} Nit: {usuarios.empresa.nit_empresa}
          </h5>
          <h4 class="card-title">Sucursal</h4>
          <h5 class="card-text">{usuarios.sucursal.sucursal}</h5>
          <br />
          <div>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Actualizar Usuario</Accordion.Header>
                <Accordion.Body>
                  <form
                    class="row g-3"
                    onSubmit={e => {
                      e.preventDefault();
                      updateUsuario();
                    }}
                  >
                    <div class="row g-2">
                      <div class="col-md">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            value={formState.correo}
                            onChange={e =>
                              setFormState({
                                ...formState,
                                correo: e.target.value,
                              })
                            }
                          />
                          <label for="correo" class="for-label">
                            Correo
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
                          <input
                            type="text"
                            class="form-control"
                            value={formState.telefono}
                            onChange={e =>
                              setFormState({
                                ...formState,
                                telefono: e.target.value,
                              })
                            }
                          />
                          <label
                            for="correoElectronicoUsuario"
                            class="for-label"
                          >
                            Telefono
                          </label>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            value={formState.celular}
                            onChange={e =>
                              setFormState({
                                ...formState,
                                celular: e.target.value,
                              })
                            }
                          />
                          <label
                            for="correoElectronicoUsuario"
                            class="for-label"
                          >
                            Celular
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
                            value={formState.direccion_usuario}
                            onChange={e =>
                              setFormState({
                                ...formState,
                                direccion_usuario: e.target.value,
                              })
                            }
                          />
                          <label
                            for="correoElectronicoUsuario"
                            class="for-label"
                          >
                            Direccion Usuario
                          </label>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            value={formState.pagina_web_usuario}
                            onChange={e =>
                              setFormState({
                                ...formState,
                                pagina_web_usuario: e.target.value,
                              })
                            }
                          />
                          <label
                            for="correoElectronicoUsuario"
                            class="for-label"
                          >
                            Pagina Web
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-2">
                      <div class="col-md">
                        <div class="form-floating">
                          <select
                            class="form-select"
                            value={formState.estado}
                            onChange={e => {
                              let esta = true;
                              if (e.target.value === "false") {
                                esta = false;
                              }
                              setFormState({
                                ...formState,
                                estado: esta,
                              });
                            }}
                          >
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                          </select>
                          <label for="estadoUsuario" class="for-label">
                            Estado
                          </label>
                        </div>
                      </div>
                      <div class="col-md"></div>
                    </div>

                    <div class="row g-2">
                      <div class="col-md">
                        <div class="form-floating">
                          <button
                            class="btn btn-primary  text-white"
                            type="submit"
                          >
                            Actualizar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cambiar Contraseña</Accordion.Header>
                <Accordion.Body>
                  <form
                    class="row g-3"
                    onSubmit={e => {
                      e.preventDefault();
                      update2Usuario();
                    }}
                  >
                    <div class="row g-2">
                      <div class="col-md">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            value={form2State.password}
                            onChange={e =>
                              set2FormState({
                                ...form2State,
                                password: e.target.value,
                              })
                            }
                          />
                          <label for="contraseñaUsuario" class="for-label">
                            Contraseña
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
                          <button
                            class="btn btn-primary  text-white"
                            type="submit"
                          >
                            Actualizar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Cambiar Sucursal</Accordion.Header>
                <Accordion.Body>
                  <form
                    class="row g-3"
                    onSubmit={e => {
                      e.preventDefault();
                      update3Usuario();
                    }}
                  >
                    <div class="row g-2">
                      <div class="col-md">
                        <div class="form-floating">
                          <select
                            class="form-select"
                            value={form3State.sucursalId}
                            onChange={e =>
                              set3FormState({
                                ...form3State,
                                sucursalId: parseInt(e.target.value),
                              })
                            }
                          >
                            {data2 && (
                              <>
                                {data2.MostrarSucursales.map(
                                  MostrarSucursales => (
                                    <option value={MostrarSucursales.id}>
                                      {MostrarSucursales.sucursal}
                                    </option>
                                  )
                                )}
                              </>
                            )}
                          </select>
                          <label for="Sucural" class="for-label">
                            Sucural
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
                          <button
                            class="btn btn-primary  text-white"
                            type="submit"
                          >
                            Actualizar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <br />
      <div class="col-md">
        <div class="form-floating">
          <Link class="btn btn-primary  text-white " to="/menuadmin">
            Volver
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Usuario;
