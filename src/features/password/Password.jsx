import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generatePassword } from './passwordSlice'

const Password = () => {

  const password = useSelector((state) => state.password.password)
  const dispatch = useDispatch()
  console.log(password.password)

  return (
    <div>
      Password Generator
      <button onClick={() => dispatch(generatePassword({password: "sdgklsdg", length: 10}))}>Generate Password</button>
       {password.password}
    </div>
  )
}

export default Password