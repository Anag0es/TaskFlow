CREATE TABLE usuarios (
    Id SERIAL PRIMARY KEY,
    Nome VARCHAR,
    Email VARCHAR UNIQUE,
    Senha VARCHAR
);
