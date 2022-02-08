import { createSlice } from "@reduxjs/toolkit"

export const messageSlice = createSlice({
    name: "messages",
    initialState: {
        messageList: null,

    },
    reducers: {
        setMessages: (state, action) => {
            return {
                ...state,
                messageList: action.payload
            }
        },

    }
})
