-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10, 2),
  image TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Seed initial services
INSERT INTO services (title, description, price, image) VALUES
  ('Pet Sitting', 'In-home visits for feeding, play, and care.', 25.00, '/assets/petsitting.jpg'),
  ('Grooming', 'Bathing, brushing, nail trims, and styling.', 50.00, '/assets/groom.jpg'),
  ('Pet Walking', 'Daily walks tailored to your pet''s needs.', 20.00, '/assets/petwalk.jpg'),
  ('Pet Taxi', 'Reliable transport to vets or appointments.', 35.00, '/assets/pettaxi.jpg')
ON CONFLICT (title) DO NOTHING;
