import { createSlice } from "@reduxjs/toolkit"

export const messageSlice = createSlice({
    name: "messages",
    initialState: {
        messageList: null,
        isLoading: true

    },
    reducers: {
        setMessages: (state, action) => {
            return {
                ...state,
                messageList: action.payload,
                isLoading: false

            }
        },

    }
})
