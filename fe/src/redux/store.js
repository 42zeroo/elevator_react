import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { buildingApi } from './services/buildingApi'
import buildingReducer from "./features/buildingSlice";

export const store = configureStore({
    reducer: {
        [buildingApi.reducerPath]: buildingApi.reducer,
        building: buildingReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(buildingApi.middleware),
})

setupListeners(store.dispatch)