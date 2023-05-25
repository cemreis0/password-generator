import { createSlice } from "@reduxjs/toolkit"

export const passwordSlice = createSlice({
  name: "password",
  initialState: {
    password: {
      password: "",
      length: 0,
      includeCharacter: "",
      excludeCharacter: ""
    }
  },
  reducers: {
    generatePassword: (state, action) => {  
    const getRandomPassword = (length, includeCharacter, excludeCharacter) => {
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()-_=+[]{}|:;"\'<>,.?/'
      let password = ""
      if (includeCharacter) {
        password += includeCharacter
        length -= includeCharacter.length
      }
      if (excludeCharacter) {
        characters.replace(excludeCharacter, "")
      }
      password += Array.from({length}, () => characters[Math.floor(Math.random() * characters.length)]).join('')
      return password
    }
    const shufflePassword = (password) => {
      const shuffledPassword = password.split('').sort(() => Math.random() - 0.5).join('')
      return shuffledPassword
    }
      state.password.password = shufflePassword(getRandomPassword(action.payload.length, action.payload.includeCharacter, action.payload.excludeCharacter))
    }
  }
})


export const { generatePassword } = passwordSlice.actions

export default passwordSlice.reducer