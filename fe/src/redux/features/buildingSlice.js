import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    floors: [],
    elevators: [],
};

export const buildingSlice = createSlice({
    name: "building",
    initialState,
    reducers: {
        setBuildingData: (state, action) => {
            state.floors = action.payload?.floors;
            state.elevators = action.payload?.elevators;
        },
        setElevators: (state, action) => {
            state.elevators = action.payload
        },
        setElevatorByIndex: (state, action) => {
            const index = state.elevators.findIndex(e => e.id === action.payload.index)
            state.elevators[index] = { ...state.elevators[index], ...action.payload.data }
        }

    }
});

export const { setBuildingData, setElevators, setElevatorByIndex } = buildingSlice.actions;

export default buildingSlice.reducer;
