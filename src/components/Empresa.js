import React from "react";
import { Link } from 'react-router-dom'
const Empresa = props => {
  const { empresas } = props;

  return (
    <div>
      <div class="card border-light bg-transparent text-white">
        <div class="card-body">
          <h4 class="card-title">Datos Internos</h4>
          <h5 class="card-text">
            {empresas.id}: {empresas.razon_social} {empresas.ap_materno} { } 
            Nit: {empresas.nit_empresa}
          </h5>
          <h4 class="card-title">Contactos</h4>
          <h5 class="card-text">
            Correo: {empresas.correo_empresa} Celular: {empresas.celular_empresa} Telefono: {empresas.telefono_empresa} { }
            Direccion: {empresas.direccion_usuario} Linea Gratuita {empresas.linea_gratuita}
          </h5>
          <h4 class="card-title">Tipo de Empresa</h4>
          <h5 class="card-text">
            {empresas.tipo_empresa.tipo}
          </h5>
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
        <br/>
      </div>
    </div>
  );
};

export default Empresa;
