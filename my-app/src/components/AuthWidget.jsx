import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"

export default function AuthWidget() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/")
  }

  return (
    <div className="auth-widget container" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", padding: "0.5rem 0" }}>
      {user ? (
        <>
          <span style={{ marginRight: 8 }}>{user.email}</span>
          <button onClick={handleLogout} className="btn logout">Log out</button>
        </>
      ) : (
        <Link to="/login" className="btn login">Log in</Link>
      )}
    </div>
  )
}
