import React from "react";

const Menu = () => {
  return (
    <div>
      <div>
        <h2 class="text-white">Cotizacion</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <h5 class="card-title">Registrar Cliente</h5>
                <p class="card-text">
                  LLenar todos los campos sin errores ya que no existe la
                  eliminacion de Clientes
                </p>
                <a
                  href="/private/registrarempresas/logout"
                  class="btn btn-primary"
                >
                  Registrar Cliente
                </a>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <h5 class="card-title">Cotizar</h5>
                <p class="card-text">LLenar todos los campos sin errores.</p>
                <a
                  href="/private/registrarusuarios/logout"
                  class="btn btn-primary"
                >
                  Cotizar
                </a>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <h5 class="card-title">Ver Cotizaciones</h5>
                <p class="card-text">
                  Mediante la siguiente tabla se observara todas las
                  Cotizaciones registradas
                </p>
                <a
                  href={"/private/mostrarempresas/logout"}
                  class="btn btn-primary"
                >
                  Ver Cotizaciones
                </a>
              </div>
            </div>
          </div>
          <div class="col text-white">
            <div class="card-header h-100">
              <div class="card-body">
                <h5 class="card-title">Ver Clientes</h5>
                <p class="card-text">
                  Mediante la siguiente tabla se observara todos los Clientes
                  registradas
                </p>
                <a
                  href={"/private/mostrarusuarios/logout"}
                  class="btn btn-primary"
                >
                  Ver Clientes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
