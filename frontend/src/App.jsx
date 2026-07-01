import { useEffect, useState } from 'react'
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

  if (!user) {
    return <Login onLoginSuccess={setUser} />
  }

  return (
    <div className="card">
      <p>Sesión iniciada como {user.name} ({user.email})</p>
      <h1>{message}</h1>
    </div>
  )
}

export default App
