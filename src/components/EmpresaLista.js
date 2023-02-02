import { useQuery, gql } from "@apollo/client";
import Empresa from "./Empresa";
import { Link } from 'react-router-dom'
const Empresas_QUERY = gql`
query MostrarEmpresas {
  MostrarEmpresas {
    id
    razon_social
    nit_empresa
    direccion_empresa
    pagina_web_empresa
    telefono_empresa
    linea_gratuita
    celular_empresa
    correo_empresa
    tipo_empresa {
      id
      tipo
    }
  }
}
`;

const EmpresaLista = () => {
  const { data, error } = useQuery(Empresas_QUERY);

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
      {data && (
        <>
          <h1 class="text-white">Empresas</h1>
          {data.MostrarEmpresas.map(MostrarEmpresas => (
            <Empresa key={MostrarEmpresas.id} empresas={MostrarEmpresas} />
          ))}
        </>
      )}
    </div>
  );
};

export default EmpresaLista;
