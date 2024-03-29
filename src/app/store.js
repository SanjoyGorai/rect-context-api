import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(pokemonApi.middleware)

});

setupListeners(store.dispatch)
