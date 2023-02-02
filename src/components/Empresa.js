import React from "react";
import { Link } from "react-router-dom";
const Empresa = props => {
  const { empresas } = props;

  return (
    <div>
      <div class="card border-light bg-transparent text-white">
        <div class="card-body">
          <h4 class="card-title">Datos Internos</h4>
          <h5 class="card-text">
            Identificador Unico {empresas.id} {": "}
            {empresas.razon_social} {" "}
            Nit: {empresas.nit_empresa}
          </h5>
          <h4 class="card-title">Contactos</h4>
          <h5 class="card-text">
            {empresas.correo_empresa ? `Correo: ${empresas.correo_empresa}` : ""} {" "}
            {empresas.celular_empresa ? `Celular: ${empresas.celular_empresa}` : ""} {" "}
            {empresas.telefono_empresa ? `Telefono: ${empresas.telefono_empresa}` : ""} {" "}
            {empresas.direccion_empresa ? `Direccion: ${empresas.direccion_empresa}` : ""} {" "}
            {empresas.linea_gratuita ? `Linea Gratuita: ${empresas.linea_gratuita}` : ""} {" "}
          </h5>
          <h4 class="card-title">Tipo de Empresa</h4>
          <h5 class="card-text">{empresas.tipo_empresa.tipo}</h5>
        </div>
      </div>
      <br />
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

export default Empresa;
