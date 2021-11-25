CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    phone INTEGER,
    email VARCHAR(40),
    CHECK(COALESCE(phone, email) IS NOT NULL)
);

CREATE TABLE outside_services (
    id SERIAL PRIMARY KEY,
    descon_pintura INTEGER,
    recons_pintura INTEGER,
    hid_plasticos INTEGER,
    encerado_mano INTEGER,
    encerado_maquina INTEGER,
    pulido_focos INTEGER
);

CREATE TABLE inside_services (
    id SERIAL PRIMARY KEY,
    hid_tablero_paneles INTEGER,
    ozono INTEGER,
    hid_leather_vynil INTEGER,
    limpieza_interior INTEGER,
    lavado_motor INTEGER
);

Table plans (
  id SERIAL PRIMARY KEY
  tipo VARCHAR(30)
  economico INTEGER
  premium INTEGER
  super_premium INTEGER
  ceramic_counting INTEGER
  New INTEGER
  vip INTEGER
  diamond INTEGER
  descripcion VARCHAR(500)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(20),
    username VARCHAR(20) UNIQUE,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    is_admin BOOLEAN,
    role VARCHAR(30),
    tokens JSON NOT NULL, 
    CHECK(COALESCE(username, email) IS NOT NULL)
);

CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(20) NOT NULL,
    model VARCHAR(20) NOT NULL,
    plate VARCHAR(20) NOT NULL,
    color VARCHAR(20) NOT NULL,
    vehicle_type VARCHAR(20),
    client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE
);

CREATE TABLE maed_services (
    id SERIAL PRIMARY KEY,
    washer VARCHAR(20) NOT NULL,
    adviser VARCHAR(20),
    left_objects VARCHAR(100),
    date_and_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    crashes VARCHAR(100),
    client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    date_and_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    order_details JSON NOT NULL,
    client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE
);

Table plans (
  id SERIAL PRIMARY KEY
  tipo VARCHAR(30)
  plan_name VARCHAR(30)
  plan_price INTEGER
  
);