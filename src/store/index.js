import { configureStore } from "@reduxjs/toolkit";
import usuarioSlice from "./slices/usuario.slice"; //Lo importamos
export default configureStore({
  reducer: {
    usuario: usuarioSlice
  },
});
