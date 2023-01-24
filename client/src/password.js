import React, { useState } from 'react'
import './password.css'

export default function Password() {
  const [password, setPassword] = useState('')
  console.log(password)

  function checkPasswordLength(str) {
    if (password.length < 8) {
      return false
    }
  }

  console.log(checkPasswordLength('hello'))
  
  function hasNumber(str) {
    const regex = /\d/; 
    return regex.test(str); 
  }
    console.log(hasNumber('hello1'))

    function hasUpperCase(str) {
        const regex = /[A-Z]/; 
        return regex.test(str); 
      }
      

  return (
    <div>
      <div className="form-group">
        <label>Title</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <br />
      <hr />
      <h3 className="val">Validations</h3>
      <br />

      <ul>
        <li className="one"> At least 8 characters</li>
        <li className="two"> At least 1 number</li>
        <li className="three">At Least one uppercase alphabet password</li>
      </ul>
    </div>
  )
}
