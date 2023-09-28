import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const user = {
      email,
      password
    }

    if (user.email === 'admin@admin' || user.password === 'admin') {
      navigate('/wallet')
    }

    console.log(user)
  }

  return (
    <div>
      <span>{email} - {password}</span>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button type="submit" onClick={handleSubmit}>Entrar</button>
      </form>
      <button>
        <Link to="/signin">Cadastrar-se</Link>
      </button>
    </div>
  )
}
