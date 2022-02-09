import { createSlice } from "@reduxjs/toolkit"

export const countrySlice = createSlice({
    name: "countries",
    initialState: {
        countryList: [],

    },
    reducers: {
        setCountries: (state, action) => {
            return {
                ...state,
                countryList: action.payload
            }
        },

    }
})
