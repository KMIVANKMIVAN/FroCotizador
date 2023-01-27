import React from "react";
import { Link } from 'react-router-dom'
const MenuAdmin = () => {
  return (
    <div>
      <div>
        <h2 class="text-white">Administracion</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Registrar Empresa</h5>
                <hr />
                <p class="card-text">
                  Porfavor llenar el Formulario sin Errores en los diferenes
                  parametros.
                  <br />
                  Se recomienda revisar los parametros dos veces antes de pulsar
                  el boton Registrar.
                </p>
                <Link to="/createempresa" class="btn btn-primary">
                  Registrar Empresa
                </Link>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Registrar Usuarios</h5>
                <hr />
                <p class="card-text">
                  Porfavor llenar el Formulario sin Errores en los diferenes
                  parametros.
                  <br />
                  Se recomienda revisar los parametros dos veces antes de pulsar
                  el boton Registrar.
                </p>
                <Link to="/createusuario" class="btn btn-primary">
                  Registrar Usuarios
                </Link>
              </div>
            </div>
          </div>

          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Registrar Sucursal</h5>
                <hr />
                <p class="card-text">
                  Porfavor llenar el Formulario sin Errores en los diferenes
                  parametros.
                  <br />
                  Se recomienda revisar los parametros dos veces antes de pulsar
                  el boton Registrar.
                </p>
                <Link to={"/createsucursal"} class="btn btn-primary">
                  Registrar Sucursal
                </Link>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Registrar Tipo Empresa</h5>
                <hr />
                <p class="card-text">
                  Porfavor llenar el Formulario sin Errores en los diferenes
                  parametros.
                  <br />
                  Se recomienda revisar los parametros dos veces antes de pulsar
                  el boton Registrar.
                </p>
                <Link to={"/createtipoemprersa"} class="btn btn-primary">
                  Registrar Tipo Empresa
                </Link>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Registrar Rol</h5>
                <hr />

                <p class="card-text">
                  Porfavor llenar el Formulario sin Errores en los diferenes
                  parametros.
                  <br />
                  Se recomienda revisar los parametros dos veces antes de pulsar
                  el boton Registrar.
                </p>
                <Link to={"/createrol"} class="btn btn-primary">
                  Registrar Rol
                </Link>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Ver Usuarios</h5>
                <hr />
                <p class="card-text">
                  En la seccion se muestra los datos de los Usuarios.
                </p>
                <Link to={"/usuariolista"} class="btn btn-primary">
                  Ver Usuarios
                </Link>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Ver Empresas</h5>
                <hr />
                <p class="card-text">
                  En la seccion se muestra los datos de las Empresas.
                </p>
                <Link to={"/empresalista"} class="btn btn-primary">
                  Ver Empresas
                </Link>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Ver Sucursal</h5>
                <hr />
                <p class="card-text">
                  En la seccion se muestra las sucursales de las Empresas.
                </p>
                <Link to={"/sucursallista"} class="btn btn-primary">
                  Ver Sucursal
                </Link>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Ver Rol</h5>
                <hr />
                <p class="card-text">
                  En la seccion se muestra los roles de los Usuarios.
                </p>
                <Link to={"/rollista"} class="btn btn-primary">
                  Ver Rol
                </Link>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Ver Tipo de Empresas</h5>
                <hr />
                <p class="card-text">
                  En la seccion se muestra los tipos de Empresas.
                </p>
                <Link to={"/tipoempresalista"} class="btn btn-primary">
                  Ver Tipo de Empresas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr class="text-white" />
      <br />
      <div>
        <h2 class="text-white">Cotizacion</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Registrar Cliente</h5>
                <hr />
                <p class="card-text">
                  Porfavor llenar el Formulario sin Errores en los diferenes
                  parametros.
                  <br />
                  Se recomienda revisar los parametros dos veces antes de pulsar
                  el boton Registrar.
                </p>
                <a href="#" class="btn btn-primary">
                  Registrar Cliente
                </a>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Cotizar</h5>
                <hr />
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">
                  Cotizar
                </a>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <hr />
                <h5 class="card-title text-center">Ver Cotizaciones</h5>
                <hr />
                <p class="card-text">
                  En la seccion se muestra las cotizaciones realizadas.
                </p>
                <a href="#" class="btn btn-primary">
                  Ver Cotizaciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAdmin;
