import { createSlice } from "@reduxjs/toolkit"

export const animalSlice = createSlice({
    name: "animal",
    initialState: {
        animalData: [],
    },
    reducers: {
        animalData: (state = [], action) => {
            state.animalData = action.payload
        }
    }
})

export const { animalData } = animalSlice.actions

export default animalSlice.reducer