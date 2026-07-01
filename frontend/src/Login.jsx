import { GoogleLogin } from '@react-oauth/google'

function Login({ onLoginSuccess }) {
  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await fetch('http://localhost:5249/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      })

      if (!res.ok) {
        throw new Error('Token inválido')
      }

      const data = await res.json()
      onLoginSuccess(data)
    } catch (err) {
      alert('No se pudo verificar el inicio de sesión con Google.')
    }
  }

  return (
    <div className="card">
      <h1>Iniciar sesión</h1>
      <GoogleLogin onSuccess={handleSuccess} onError={() => alert('Error al iniciar sesión con Google')} />
    </div>
  )
}

export default Login
