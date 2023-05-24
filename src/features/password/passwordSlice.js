import { createSlice } from "@reduxjs/toolkit"

export const passwordSlice = createSlice({
  name: "password",
  initialState: {
    password: {
      password: "",
      length: 0,
    }
  },
  reducers: {
    generatePassword: (state, action) => {
      const getRandomPassword = (characters, length) => {
        return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('')
      }
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()-_=+[]{}|\\:;\"\'<>,.?/'
      state.password.password = getRandomPassword(characters, action.payload.length)

    }
  }
})

export const { generatePassword } = passwordSlice.actions

export default passwordSlice.reducer