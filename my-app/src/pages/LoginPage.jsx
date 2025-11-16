import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // Very simple fake auth: accept any non-empty email/password
    if (!email || !password) {
      setError("Please enter email and password.")
      return
    }
    login(email)
    navigate("/")
  }

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <label style={{ display: "block", marginBottom: 8 }}>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: 8 }} />
        </label>
        <label style={{ display: "block", marginBottom: 8 }}>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: 8 }} />
        </label>
        {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
        <button type="submit" className="btn">Log in</button>
      </form>
    </div>
  )
}

export default LoginPage
