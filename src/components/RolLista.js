import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
const ROL_QUERY = gql`
  query MostrarRoles {
    MostrarRoles {
      id
      rol
      tiporol
    }
  }
`;

const RolLista = () => {
  const { data, error } = useQuery(ROL_QUERY);

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
    <div class="container">
      <div class="col-md-auto">
        {data && (
          <>
            <h1 class="text-white">Rol</h1>
            <br />
            <table class="table text-white  text-center table-bordered">
              <thead>
                <tr class="text-white  fw-bold">
                  <th>
                    <h3>ID</h3>
                  </th>
                  <th>
                    <h3>ROL</h3>
                  </th>
                  <th>
                    <h3>TIPO ROL</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.MostrarRoles.map(MostrarRoles => (
                  <tr class="text-white fw-bold">
                    <td>{MostrarRoles.id}</td>
                    <td>{MostrarRoles.rol}</td>
                    <td>{MostrarRoles.tiporol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
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

export default RolLista;
