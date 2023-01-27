import { useQuery, gql } from "@apollo/client";
import Usuario from "./Usuario";
const USUARIOS_QUERY = gql`
  query MostrarUsuario {
    MostrarUsuario {
      id
      ap_paterno
      ap_materno
      ap_casado
      nombres
      numero_carnet
      extesion
      correo
      estado
      celular
      telefono
      nit_usuario
      direccion_usuario
      pagina_web_usuario
      rol {
        id
        rol
      }
      sucursal {
        id
        sucursal
      }
      empresa {
        razon_social
        nit_empresa
      }
    }
  }
`;

const UsuarioLista = () => {
  const { data } = useQuery(USUARIOS_QUERY);

  return (
    <div>
      {data && (
        <>
          <h1 class="text-white">Usuarios</h1>
          {data.MostrarUsuario.map(MostrarUsuario => (
            <Usuario key={MostrarUsuario.id} usuarios={MostrarUsuario} />
          ))}
        </>
      )}
    </div>
  );
};

export default UsuarioLista;
