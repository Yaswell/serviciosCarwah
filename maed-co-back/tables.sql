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
  id SERIAL [pk, increment]
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