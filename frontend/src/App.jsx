import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Cargando...')

  useEffect(() => {
    fetch('http://localhost:5249/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error al conectar con el backend'))
  }, [])

  return (
    <div className="card">
      <h1>{message}</h1>
    </div>
  )
}

export default App
