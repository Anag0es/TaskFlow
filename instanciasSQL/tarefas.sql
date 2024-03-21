CREATE TYPE prioridade_enum AS ENUM ('Baixa', 'Média', 'Alta');
CREATE TYPE status_enum AS ENUM ('Pendente', 'Em Andamento', 'Concluído');

CREATE TABLE tarefas (
    Id SERIAL PRIMARY KEY,
    Titulo VARCHAR,
    Descricao TEXT,
    Prioridade prioridade_enum,
    Status status_enum,
    DataConclusao DATE,
    UsuarioId INT,
    FOREIGN KEY (UsuarioId) REFERENCES usuarios(Id)
);
