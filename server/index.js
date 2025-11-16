import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// PostgreSQL connection
const client = new pg.Client({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "petservice",
  user: process.env.DB_USER || "petuser",
  password: process.env.DB_PASSWORD || "petpass",
})

client.connect().catch((err) => {
  console.error("Database connection failed:", err)
  process.exit(1)
})

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() })
})

// GET /api/services - List all services
app.get("/api/services", async (req, res) => {
  try {
    const result = await client.query("SELECT id, title, description, price, image, created_at FROM services ORDER BY id")
    res.json(result.rows)
  } catch (error) {
    console.error("Error fetching services:", error)
    res.status(500).json({ error: "Failed to fetch services" })
  }
})

// POST /api/contact - Save contact form submission
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, message" })
  }

  try {
    const result = await client.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id, created_at",
      [name, email, message]
    )
    res.status(201).json({
      id: result.rows[0].id,
      message: "Contact submitted successfully",
      created_at: result.rows[0].created_at,
    })
  } catch (error) {
    console.error("Error saving contact:", error)
    res.status(500).json({ error: "Failed to save contact" })
  }
})

// POST /api/services (admin only) - Add a new service
app.post("/api/services", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]
  const adminToken = process.env.ADMIN_TOKEN || "changeme"

  if (token !== adminToken) {
    return res.status(403).json({ error: "Unauthorized. Invalid or missing admin token." })
  }

  const { title, description, price, image } = req.body

  if (!title || !description) {
    return res.status(400).json({ error: "Missing required fields: title, description" })
  }

  try {
    const result = await client.query(
      "INSERT INTO services (title, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, price || null, image || null]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error("Error creating service:", error)
    res.status(500).json({ error: "Failed to create service" })
  }
})

// GET /api/contacts (admin only) - List all contact submissions
app.get("/api/contacts", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]
  const adminToken = process.env.ADMIN_TOKEN || "changeme"

  if (token !== adminToken) {
    return res.status(403).json({ error: "Unauthorized. Invalid or missing admin token." })
  }

  try {
    const result = await client.query("SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC")
    res.json(result.rows)
  } catch (error) {
    console.error("Error fetching contacts:", error)
    res.status(500).json({ error: "Failed to fetch contacts" })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
