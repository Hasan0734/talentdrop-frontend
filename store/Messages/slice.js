import { createSlice } from "@reduxjs/toolkit"

export const messageSlice = createSlice({
    name: "messages",
    initialState: {
        messageList: null,
        isLoding: true

    },
    reducers: {
        setMessages: (state, action) => {
            return {
                ...state,
                messageList: action.payload,
                isLoding: false

            }
        },

    }
})
