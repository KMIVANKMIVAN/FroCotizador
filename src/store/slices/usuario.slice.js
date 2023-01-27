import { createSlice } from '@reduxjs/toolkit';

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: {},
    reducers: {
        setUsuario: (state, action) => {
            const usuarioSeleccionado= action.payload;
            return usuarioSeleccionado;
        }
    }
})

export const { setUsuario } = usuarioSlice.actions;

export default usuarioSlice.reducer;