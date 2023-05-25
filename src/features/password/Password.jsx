import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generatePassword } from './passwordSlice'

const Password = () => {

  const [length, setLength] = useState(8)
  const [includeCharacter, setIncludeCharacter] = useState("")
  const [excludeCharacter, setExcludeCharacter] = useState("")
  const password = useSelector(state => state.password.password)
  const dispatch = useDispatch()
  
  const handleSubmit = e => {
    e.preventDefault()
    if (length >= 4 && length <= 64) {
      dispatch(generatePassword({length: length, includeCharacter: includeCharacter, excludeCharacter: excludeCharacter}))
    } else {
      alert("Enter a length between 4 and 64.")
    }
  }

  return (
    <div className="passwordgenerator">
      <h2>Password Generator</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="length">Length &#40;0-64&#41;: </label>
        <input type="number" id="length" min="4" max="64" value={length} onChange={(e) => setLength(e.target.value)} />
        <label htmlFor="includeCharacter">Enter characters to include &#40;optional&#41;: </label>
        <input type="text" id="includeCharacter" maxLength={length} placeholder="Enter text..." value={includeCharacter} onChange={(e) => setIncludeCharacter(e.target.value)} />
        <label htmlFor="excludeCharacter">Enter characters to exclude &#40;optional&#41;: </label>
        <input type="text" id="excludeCharacter" placeholder="Enter text..." value={excludeCharacter} onChange={(e) => setExcludeCharacter(e.target.value)} />
        <button type="submit" onSubmit={() => dispatch(generatePassword({length: length, includeCharacter: includeCharacter, excludeCharacter: excludeCharacter}))}>Generate</button>
      </form>
      <h3>Your password:</h3>
      <h3 className="password">{password.password}</h3>
    </div>
  )
}

export default Password