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
    lavado_motor INTEGER,
);