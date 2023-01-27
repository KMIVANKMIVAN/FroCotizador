import { useQuery, gql } from "@apollo/client";
import Empresa from "./Empresa";

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
  const { data } = useQuery(Empresas_QUERY);

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
