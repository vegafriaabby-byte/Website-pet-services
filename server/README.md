# PetService Pro Backend

Backend API for the PetService Pro pet care services website.

## Quick Start

### Prerequisites
- Docker & Docker Compose installed
- Node.js 18+ (if running locally without Docker)

### Setup with Docker Compose

1. Copy the environment file:
```bash
cp .env.example .env
```

2. Start the database and server:
```bash
docker compose up -d
```

3. Verify the server is running:
```bash
curl http://localhost:3001/health
```

### Local Setup (without Docker)

1. Install PostgreSQL and create a database:
```bash
createdb petservice
```

2. Copy and configure the environment file:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

3. Initialize the database schema (run the SQL in `init-db.sh` manually in psql).

4. Install dependencies and start the server:
```bash
npm install
npm start
```

## API Endpoints

### Public Endpoints

#### GET /api/services
Retrieve all available pet services.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Pet Sitting",
    "description": "In-home visits for feeding, play, and care.",
    "price": 25.00,
    "image": "/assets/petsitting.jpg",
    "created_at": "2025-11-16T10:00:00Z"
  }
]
```

#### POST /api/contact
Submit a contact form message.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to inquire about pet sitting services."
}
```

**Response:**
```json
{
  "id": 1,
  "message": "Contact submitted successfully",
  "created_at": "2025-11-16T10:05:00Z"
}
```

### Admin Endpoints (require Authorization header)

#### POST /api/services
Add a new pet service (requires `ADMIN_TOKEN`).

**Headers:**
```
Authorization: Bearer <ADMIN_TOKEN>
```

**Request:**
```json
{
  "title": "Veterinary Care",
  "description": "Professional vet services.",
  "price": 100.00,
  "image": "/assets/vet.jpg"
}
```

**Response:**
```json
{
  "id": 5,
  "title": "Veterinary Care",
  "description": "Professional vet services.",
  "price": 100.00,
  "image": "/assets/vet.jpg",
  "created_at": "2025-11-16T10:10:00Z"
}
```

#### GET /api/contacts
Retrieve all contact submissions (requires `ADMIN_TOKEN`).

**Headers:**
```
Authorization: Bearer <ADMIN_TOKEN>
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'd like to inquire about pet sitting services.",
    "created_at": "2025-11-16T10:05:00Z"
  }
]
```

## Example curl Requests

### Get services:
```bash
curl http://localhost:3001/api/services
```

### Submit a contact:
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "message": "Interested in grooming services."
  }'
```

### Add a service (admin):
```bash
curl -X POST http://localhost:3001/api/services \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer changeme" \
  -d '{
    "title": "Dog Training",
    "description": "Professional obedience training.",
    "price": 75.00,
    "image": "/assets/training.jpg"
  }'
```

### Get contacts (admin):
```bash
curl -H "Authorization: Bearer changeme" http://localhost:3001/api/contacts
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| DB_HOST | localhost | PostgreSQL host |
| DB_PORT | 5432 | PostgreSQL port |
| DB_NAME | petservice | Database name |
| DB_USER | petuser | Database user |
| DB_PASSWORD | petpass | Database password |
| PORT | 3001 | Server port |
| ADMIN_TOKEN | changeme | Token for admin endpoints |

## Database Schema

### services table
- `id` (serial, primary key)
- `title` (text)
- `description` (text)
- `price` (numeric, nullable)
- `image` (text, nullable)
- `created_at` (timestamp, default: now())

### contacts table
- `id` (serial, primary key)
- `name` (text)
- `email` (text)
- `message` (text)
- `created_at` (timestamp, default: now())

## Development

To run in watch mode (requires local Node.js):
```bash
npm run dev
```

To stop Docker services:
```bash
docker compose down
```

To view logs:
```bash
docker compose logs -f server
docker compose logs -f postgres
```
