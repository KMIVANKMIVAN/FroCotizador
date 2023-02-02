import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useMutation, useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
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
  const { data: data2, error: error0 } = useQuery(SUCURSAL_QUERY);
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

  const [password, setPasswordValue] = React.useState("password");
  const toggle = () => {
    if (password === "password") {
      setPasswordValue("text");
      return;
    }
    setPasswordValue("password");
  };
  
  if (error0) {
    return (
      <div class="alert alert-danger" role="alert">
        <h4>¡Error de envío! {error0.message};</h4>
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
  if (error1) {
    return (
      <div class="alert alert-danger" role="alert">
        <h4>¡Error de envío! {error1.message};</h4>
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
  if (error2) {
    return (
      <div class="alert alert-danger" role="alert">
        <h4>¡Error de envío! {error1.message};</h4>
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
  if (error3) {
    return (
      <div class="alert alert-danger" role="alert">
        <h4>¡Error de envío! {error3.message};</h4>
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
    <div>
      <div class="card border-light bg-transparent text-white">
        <div class="card-body">
          <h4 class="card-title">Datos Personales</h4>
          <h5 class="card-text">
            Identificador Unico {usuarios.id} {": "}
            {usuarios.ap_paterno} {" "}
            {usuarios.ap_materno} {" "}
            {usuarios.ap_casado} {" "}
            {usuarios.nombres} {" "}
            Numero de Carnet: {usuarios.numero_carnet} {usuarios.extesion} {" "}
            {usuarios.nit_usuario ? `Con Nit: ${usuarios.nit_usuario}` : ""}
          </h5>
          <h4 class="card-title">Estado</h4>
          <h5 class="card-text">{usuarios.estado ? "Activo" : "Inactivo"}</h5>
          <h4 class="card-title">Contactos Personales</h4>
          <h5 class="card-text">
            Correo: {usuarios.correo} {" "}
            {usuarios.celular ? `Celular: ${usuarios.celular}` : ""} {" "}
            {usuarios.telefono ? `Telefono: ${usuarios.telefono}` : ""} {" "}
            {usuarios.direccion_usuario ? `Direccion: ${usuarios.direccion_usuario}` : ""} {" "}
            {usuarios.pagina_web_usuario ? `Pagina Web: ${usuarios.pagina_web_usuario}` : ""}
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
                            type={password}
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
                            <option selected>Seleccione</option>
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
