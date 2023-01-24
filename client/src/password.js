import React, { useState } from 'react'
import './password.css'

export default function Password({items}) {
  const [password, setPassword] = useState('')
  console.log(password)

  function checkPasswordLength(password) {
    if (password.length >= 8) {
      return true
    }
  }

  function hasNumber(password) {
    const regex = /\d/
    return regex.test(password)
  }

  function hasUpperCase(password) {
    const regex = /[A-Z]/
    return regex.test(password)
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


      {/* <ul>
      {items.map((item, index) => (
        <li key={index} className={`${checkPasswordLength(password) ? "strike-through" : ""} 
                            ${hasNumber(password) ? "strike-through" : ""}
                            ${hasUpperCase(password) ? "strike-through" : ""}`}>
          {item}
        </li>
      ))}
    </ul> */}
      <ul>
        <li className={`${checkPasswordLength(password) ? "strike-through" : ""}`}> At least 8 characters</li>
        <li className={`${hasNumber(password) ? "strike-through" : ""}`}> At least 1 number</li>
        <li className={`${hasUpperCase(password) ? "strike-through" : ""}`}>At Least one uppercase alphabet password</li>
      </ul>
    </div>
  )
}
