import React, { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import validator from "validator";

const CREATE_USUARIO_MUTATION = gql`
  mutation CrearUsuario($createUsuarioInput: CreateUsuarioInput!) {
    CrearUsuario(createUsuarioInput: $createUsuarioInput) {
      id
    }
  }
`;

const EMPRESA_QUERY = gql`
  query MostrarEmpresas {
    MostrarEmpresas {
      id
      razon_social
      tipo_empresa {
        id
        tipo
      }
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
const ROL_QUERY = gql`
  query MostrarRoles {
    MostrarRoles {
      id
      rol
      tiporol
    }
  }
`;

const PruebaCreateUsuario = () => {
  const { data: data1 } = useQuery(EMPRESA_QUERY);
  const { data: data2 } = useQuery(SUCURSAL_QUERY);
  const { data: data3 } = useQuery(ROL_QUERY);

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    ap_paterno: null,
    ap_materno: null,
    ap_casado: null,
    nombres: null,
    numero_carnet: null,
    extesion: null,
    correo: null,
    password: null,
    estado: null,
    celular: null,
    telefono: null,
    nit_usuario: null,
    direccion_usuario: null,
    pagina_web_usuario: null,
    rolId: null,
    sucursalId: null,
    empresasId: null,
  });

  const [password, setPasswordValue] = React.useState("password");

  const toggle = () => {
    if (password === "password") {
      setPasswordValue("text");
      return;
    }
    setPasswordValue("password");
  };

  const [createUsuario, { error }] = useMutation(CREATE_USUARIO_MUTATION, {
    variables: {
      createUsuarioInput: {
        ap_paterno: formState.ap_paterno,
        ap_materno: formState.ap_materno,
        ap_casado: formState.ap_casado,
        nombres: formState.nombres,
        numero_carnet: formState.numero_carnet,
        extesion: formState.extesion,
        correo: formState.correo,
        password: formState.password,
        estado: formState.estado,
        celular: formState.celular,
        telefono: formState.telefono,
        nit_usuario: formState.nit_usuario,
        direccion_usuario: formState.direccion_usuario,
        pagina_web_usuario: formState.pagina_web_usuario,
        rolId: formState.rolId,
        sucursalId: formState.sucursalId,
        empresasId: formState.empresasId,
      },
    },
    onCompleted: () => navigate("/menuadmin"),
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validate = value => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Contraseña Segura: Se Registrara");
    } else {
      setErrorMessage(
        "Minimo 8 Caracteres, Simbolos, Numeros, Mayusculas, Minusculas: No Se Registrara"
      );
    }
  };

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
    <div>
      <div class="alert alert-warning d-flex align-items-center" role="alert">
        <p>
          Los Campos:
          <strong class="text-danger">
            {" "}
            "Nombres", "Apellido Materno o Paterno", "Numero Carnet".
            "Extesion", "Correo", "Contraseña", "Estado", "Rol", "Sucursal",
            "Empresa" SON OBLIGATORIOS
          </strong>
          , caso contrario no se Realizara el Registro
        </p>
      </div>
      <form
        class="row g-3 needs-validation"
        novalidate
        onSubmit={e => {
          e.preventDefault();
          createUsuario();
        }}
      >
        <h2 class="text-white">Registrar Usuario</h2>
        <div class="row g-2">
          <div class="col-md">
            <div class="col-sm-5">
              <div class="form-floating">
                <select
                  class="form-select"
                  value={formState.empresasId}
                  onChange={e =>
                    setFormState({
                      ...formState,
                      empresasId: parseInt(e.target.value),
                    })
                  }
                >
                  <option selected>Seleccione</option>
                  {data1 && (
                    <>
                      {data1.MostrarEmpresas.map(MostrarEmpresas => (
                        <option value={MostrarEmpresas.id}>
                          {MostrarEmpresas.razon_social}
                        </option>
                      ))}
                    </>
                  )}
                </select>
                <label for="Sucural" class="for-label">
                  Empresa
                </label>
                <div class="invalid-feedback">
                  Example invalid select feedback
                </div>
              </div>
            </div>
          </div>
          <div class="col-md was-validated">
            <div class="form-floating">
              <input
                type="text"
                id="validationCustom01"
                required
                class="form-control"
                value={formState.nombres}
                onChange={e =>
                  setFormState({
                    ...formState,
                    nombres: e.target.value,
                  })
                }
              />
              <label for="validationCustom01" class="for-label">
                Nombres
              </label>
              <div class="valid-feedback">Completado</div>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md">
            <div class="col-sm-5">
              <div class="form-floating">
                <select
                  class="form-select"
                  value={formState.rolId}
                  onChange={e =>
                    setFormState({
                      ...formState,
                      rolId: parseInt(e.target.value),
                    })
                  }
                >
                  <option selected>Seleccione</option>
                  {data3 && (
                    <>
                      {data3.MostrarRoles.map(MostrarRoles => (
                        <option value={MostrarRoles.id}>
                          {MostrarRoles.rol}
                        </option>
                      ))}
                    </>
                  )}
                </select>
                <label class="for-label">Rol de Usuario</label>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                value={formState.ap_paterno}
                onChange={e =>
                  setFormState({
                    ...formState,
                    ap_paterno: e.target.value,
                  })
                }
              />
              <label for="apPaternoUsuario" class="for-label">
                Apellido Paterno
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
                value={formState.ap_materno}
                onChange={e =>
                  setFormState({
                    ...formState,
                    ap_materno: e.target.value,
                  })
                }
              />
              <label for="apMaternoUsuario" class="for-label">
                Apellido Materno
              </label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                value={formState.ap_casado}
                onChange={e =>
                  setFormState({
                    ...formState,
                    ap_casado: e.target.value,
                  })
                }
              />
              <label for="carnetIdentidadUsuario" class="for-label">
                Apellido Casado
              </label>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md was-validated">
            <div class="form-floating">
              <input
                type="text"
                id="validationCustom01"
                required
                class="form-control"
                value={formState.numero_carnet}
                onChange={e =>
                  setFormState({
                    ...formState,
                    numero_carnet: e.target.value,
                  })
                }
              />
              <label for="carnetIdentidadUsuario" class="for-label">
                Numero de Carnet
              </label>
            </div>
          </div>
          <div class="col-md">
            <div class="col-sm-5">
              <div class="form-floating">
                <select
                  class="form-select"
                  value={formState.extesion}
                  onChange={e =>
                    setFormState({
                      ...formState,
                      extesion: e.target.value,
                    })
                  }
                >
                  <option selected>Seleccione</option>
                  <option value="LP">LP</option>
                  <option value="CB">CB</option>
                  <option value="SC">SC</option>
                  <option value="BE">BE</option>
                  <option value="CH">CH</option>
                  <option value="OR">OR</option>
                  <option value="PD">PD</option>
                  <option value="PT">PT</option>
                  <option value="TJ">TJ</option>
                </select>
                <label for="ciudadNacimientoUsuario" class="for-label">
                  Extesion
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md was-validated">
            <div class="form-floating">
              <input
                type={password}
                id="validationCustom01"
                required
                class="form-control"
                placeholder="Contraseña 8 o mas Caracteres"
                value={formState.password}
                onChange={e =>
                  setFormState(
                    {
                      ...formState,
                      password: e.target.value,
                    },
                    validate(e.target.value)
                  )
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
            <div class=" col-md-12 col-lg-8 ">
              {(() => {
                if (errorMessage === "Contraseña Segura: Se Registrara") {
                  return (
                    <div class="alert alert-success" role="alert">
                      {errorMessage}
                    </div>
                  );
                } else {
                  return (
                    <div class="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md was-validated">
            <div class="form-floating">
              <input
                type="email"
                id="validationCustom01"
                required
                class="form-control"
                placeholder="Correo Electronico Valido"
                value={formState.correo}
                onChange={e =>
                  setFormState({
                    ...formState,
                    correo: e.target.value,
                  })
                }
              />
              <label for="correoElectronicoUsuario" class="for-label">
                Correo
              </label>
            </div>
          </div>
          <div class="col-md">
            <div class="col-sm-5">
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
                  <option selected>Seleccione</option>
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
                <label for="estadoUsuario" class="for-label">
                  Estado
                </label>
              </div>
            </div>
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
              <label for="correoElectronicoUsuario" class="for-label">
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
              <label for="correoElectronicoUsuario" class="for-label">
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
              <label for="correoElectronicoUsuario" class="for-label">
                Direccion Usuario
              </label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                value={formState.nit_usuario}
                onChange={e =>
                  setFormState({
                    ...formState,
                    nit_usuario: e.target.value,
                  })
                }
              />
              <label for="correoElectronicoUsuario" class="for-label">
                Nit Usuario
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
                value={formState.pagina_web_usuario}
                onChange={e =>
                  setFormState({
                    ...formState,
                    pagina_web_usuario: e.target.value,
                  })
                }
              />
              <label for="correoElectronicoUsuario" class="for-label">
                Pagina Web
              </label>
            </div>
          </div>
          <div class="col-md">
            <div class="col-sm-5">
              <div class="form-floating">
                <select
                  class="form-select"
                  value={formState.sucursalId}
                  onChange={e =>
                    setFormState({
                      ...formState,
                      sucursalId: parseInt(e.target.value),
                    })
                  }
                >
                  <option selected>Seleccione</option>
                  {data2 && (
                    <>
                      {data2.MostrarSucursales.map(MostrarSucursales => (
                        <option value={MostrarSucursales.id}>
                          {MostrarSucursales.sucursal}
                        </option>
                      ))}
                    </>
                  )}
                </select>
                <label for="Sucural" class="for-label">
                  Sucural
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating">
              {data1 && (
                <>
                  {data1.MostrarEmpresas.map(MostrarEmpresas => (
                    <div>
                      {data3 && (
                        <>
                          {data3.MostrarRoles.map(MostrarRoles => (
                            <div>
                              {(() => {
                                if (
                                  formState.rolId ===
                                    parseInt(MostrarRoles.id) &&
                                  MostrarEmpresas.tipo_empresa.tipo ===
                                    MostrarRoles.tiporol &&
                                  "Administrador" === MostrarRoles.rol &&
                                  parseInt(MostrarEmpresas.id) ===
                                    formState.empresasId &&
                                  errorMessage ===
                                    "Contraseña Segura: Se Registrara" &&
                                  formState.extesion !== null &&
                                  formState.estado !== null &&
                                  formState.sucursalId !== null
                                ) {
                                  return (
                                    <button
                                      class="btn btn-primary  text-white"
                                      type="submit"
                                    >
                                      Registrar Usuario Interno
                                    </button>
                                  );
                                }
                                if (
                                  formState.rolId ===
                                    parseInt(MostrarRoles.id) &&
                                  MostrarEmpresas.tipo_empresa.tipo ===
                                    MostrarRoles.tiporol &&
                                  "Agente" === MostrarRoles.rol &&
                                  parseInt(MostrarEmpresas.id) ===
                                    formState.empresasId &&
                                  errorMessage ===
                                    "Contraseña Segura: Se Registrara" &&
                                  formState.extesion !== null &&
                                  formState.estado !== null &&
                                  formState.sucursalId !== null
                                ) {
                                  return (
                                    <button
                                      class="btn btn-primary  text-white"
                                      type="submit"
                                    >
                                      Registrar Usuario Interno
                                    </button>
                                  );
                                }
                                if (
                                  formState.rolId ===
                                    parseInt(MostrarRoles.id) &&
                                  MostrarEmpresas.tipo_empresa.tipo ===
                                    MostrarRoles.tiporol &&
                                  "Ejecutivo" === MostrarRoles.rol &&
                                  parseInt(MostrarEmpresas.id) ===
                                    formState.empresasId &&
                                  errorMessage ===
                                    "Contraseña Segura: Se Registrara" &&
                                  formState.extesion !== null &&
                                  formState.estado !== null &&
                                  formState.sucursalId !== null
                                ) {
                                  return (
                                    <button
                                      class="btn btn-primary  text-white"
                                      type="submit"
                                    >
                                      Registrar Usuario Externo
                                    </button>
                                  );
                                }
                              })()}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
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
    </div>
  );
};

export default PruebaCreateUsuario;
