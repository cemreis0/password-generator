import { configureStore } from "@reduxjs/toolkit"
import passwordReducer from "../features/password/passwordSlice"

export default configureStore({
  reducer: { password: passwordReducer }
})