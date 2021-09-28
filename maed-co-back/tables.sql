CREATE TABLE clients (
    id SERIAL PRIMARY KEY
    first_name VARCHAR(20)
    last_name VARCHAR(20)
    phone INTEGER
    email VARCHAR(40)
    CHECK(COALESCE(phone, email) IS NOT NULL)
);