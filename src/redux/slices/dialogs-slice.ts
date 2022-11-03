import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: 'dialogs',
  initialState: {
    messages: [] as IMessage[]
  },
  reducers: {
    setMessages(state, action: PayloadAction<IMessage[]>) {
      state.messages = [...state.messages, ...action.payload]
    }
  }
})

export const { setMessages } = chatSlice.actions

export interface IMessage {
  message: string
  photo: string
  userId: number
  userName: string
} 
