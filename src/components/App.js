import React, { Component } from "react";

import UsuarioLista from "./UsuarioLista";
import EmpresaLista from "./EmpresaLista";
import CreateUsuario from "./CreateUsuario";
import CreateEmpresa from "./CreateEmpresa";
import Login from "./Login";
import Menu from "./Menu";
import MenuAdmin from "./MenuAdmin";
import PagNoEncontrada from "./PagNoEncontrada";
import Prueba from "./Prueba";
import Header from "./Header";
import CreateSucursal from "./CreateSucursal";
import CreateTipoEmprersa from "./CreateTipoEmprersa";
import CreateRol from "./CreateRol";

import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import SucursalLista from "./SucursalLista";
import RolLista from "./RolLista";
import TipoEmpresaLista from "./TipoEmpresaLista";
import PruebaCreateUsuario from "./PruebaCreateUsuario";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<PagNoEncontrada />} />
          <Route path="/" element={<Login/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/menuadmin" element={<MenuAdmin/>} />
          <Route path="/usuariolista" element={<UsuarioLista />} />
          <Route path="/empresalista" element={<EmpresaLista />} />
          <Route path="/createusuario" element={<CreateUsuario />} />
          <Route path="/createempresa" element={<CreateEmpresa />} />
          <Route path="/createsucursal" element={<CreateSucursal />} />
          <Route path="/createtipoemprersa" element={<CreateTipoEmprersa />} />
          <Route path="/createrol" element={<CreateRol />} />
          <Route path="/sucursallista" element={<SucursalLista />} />
          <Route path="/rollista" element={<RolLista />} />
          <Route path="/tipoempresalista" element={<TipoEmpresaLista />} />
          <Route path="/prueba" element={<Prueba />} />
          <Route path="/usuariopreueba" element={<PruebaCreateUsuario />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
