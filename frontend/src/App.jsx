import { useEffect, useState } from 'react'
import { googleLogout } from '@react-oauth/google'
import Login from './Login.jsx'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('Cargando...')

  useEffect(() => {
    if (!user) return

    fetch('http://localhost:5249/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error al conectar con el backend'))
  }, [user])

  const handleLogout = () => {
    googleLogout()
    setUser(null)
  }

  if (!user) {
    return <Login onLoginSuccess={setUser} />
  }

  return (
    <div className="card">
      <p>Sesión iniciada como {user.name} ({user.email})</p>
      <h1>{message}</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default App
