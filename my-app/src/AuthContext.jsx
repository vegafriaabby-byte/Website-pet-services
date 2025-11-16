import React, { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth_user")
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {}
  }, [])

  function login(email) {
    const u = { email }
    localStorage.setItem("auth_user", JSON.stringify(u))
    setUser(u)
  }

  function logout() {
    localStorage.removeItem("auth_user")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
