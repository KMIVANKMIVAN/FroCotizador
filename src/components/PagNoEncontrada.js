import { Link } from "react-router-dom";
function PagNoEncontrada() {
  return (
    <div class="page-wrap d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-1 d-block text-white">404</span>
            <div class="mb-4 lead text-white">
              No se encontró la página que está buscando.
            </div>
            <div class="form-floating">
              <Link class="btn btn-primary  text-white " to="/menuadmin">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagNoEncontrada;
