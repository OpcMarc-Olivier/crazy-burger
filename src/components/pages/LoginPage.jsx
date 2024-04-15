import React from 'react'
import { useState } from 'react';

function LoginPage() {
  //state
const [inputValue,setInputValue]= useState ("");
//comportement

const handleSubmit = (e)=>{
  e.preventDefault()
  alert(`"Bonjour ${inputValue}!"`)
  setInputValue("")
}

const handleChange = (e)=>{
  console.log(e.target.value)
  setInputValue(e.target.value)
  
}
  return (
    <div>
     <h1>Bienvenue chez nous!</h1>
     <h2>Connectez-vous!</h2>
     <form action="" onSubmit={handleSubmit}>
      <input required onChange={handleChange} value={inputValue} type="" placeholder="Entrer votre prénom" /><button>Accéder à voter espace</button>
     </form>
    </div>
  )
}

export default LoginPage

