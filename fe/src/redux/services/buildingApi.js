import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const buildingApi = createApi({
    reducerPath: 'buildingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
        getBuilding: builder.query({
            query: () => `building`,
        }),
        getElevators: builder.query({
            query: () => `elevators`,
        }),

    }),
})

export const { useGetBuildingQuery, useGetElevatorsQuery, useGetFloorByLevelQuery } = buildingApi