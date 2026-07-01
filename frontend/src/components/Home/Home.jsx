import { useEffect, useState } from 'react'
import { googleLogout } from '@react-oauth/google'
import { API_BASE_URL } from '../../config.js'
import SettingsMenu from '../SettingsMenu/SettingsMenu.jsx'

function Home({ user, onLogout }) {
  const [message, setMessage] = useState('Cargando...')

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error al conectar con el backend'))
  }, [])

  const handleLogout = () => {
    googleLogout()
    onLogout()
  }

  return (
    <div className="card">
      <SettingsMenu onLogout={handleLogout} />
      <p>Sesión iniciada como {user.name} ({user.email})</p>
      <h1>{message}</h1>
    </div>
  )
}

export default Home
