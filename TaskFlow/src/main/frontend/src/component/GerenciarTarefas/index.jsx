import React, { useState } from 'react';
import styles from './styles.module.css';

export default function GerenciarTarefas({ userId }) {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState({
        titulo: '',
        descricao: '',
        dataConclusao: '',
        prioridade: 'baixa',
        status: 'pendente',
        userId: userId
    });

      const [mostrarFormulario, setMostrarFormulario] = useState(false); // Estado para controlar a exibição do formulário


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovaTarefa({ ...novaTarefa, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa({ // Reseta o estado da nova tarefa
            titulo: '',
            descricao: '',
            dataConclusao: '',
            prioridade: 'baixa',
            status: 'pendente',
            userId: userId // Mantém userId no estado da nova tarefa
        });
         setMostrarFormulario(false); // Após enviar, esconder o formulário
    };

    const toggleFormulario = () => {
            setMostrarFormulario(!mostrarFormulario); // Alternar a visibilidade do formulário
        };

    return (
            <div className={styles.container}>
                <div className={styles.pendente}>
                    <h1 className={styles.titulo}>
                        Pendente
                        <button onClick={toggleFormulario} className={styles.botaoMais}>+</button> {/* Botão para mostrar o formulário */}
                    </h1>
                    <div className={styles.boxPendente}>
                        {tarefas.map((tarefa, index) => {
                            if (tarefa.status === 'pendente') {
                                return <div key={index} className={styles.quadro}>{tarefa.titulo}</div>;
                            }
                            return null;
                        })}
                    </div>
                </div>
                {mostrarFormulario && ( // Renderizar o formulário apenas se mostrarFormulario for verdadeiro
                    <div className={styles.modal}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input type="text" name="titulo" placeholder="Título" value={novaTarefa.titulo} onChange={handleInputChange} />
                            <input type="text" name="descricao" placeholder="Descrição" value={novaTarefa.descricao} onChange={handleInputChange} />
                            <input type="date" name="dataConclusao" placeholder="Data de Conclusão" value={novaTarefa.dataConclusao} onChange={handleInputChange} />
                            <select name="prioridade" value={novaTarefa.prioridade} onChange={handleInputChange}>
                                <option value="baixa">Baixa</option>
                                <option value="média">Média</option>
                                <option value="alta">Alta</option>
                            </select>
                            <select name="status" value={novaTarefa.status} onChange={handleInputChange}>
                                <option value="pendente">Pendente</option>
                                <option value="em andamento">Em Andamento</option>
                                <option value="concluída">Concluída</option>
                            </select>
                            <button type="submit">Adicionar Tarefa</button>
                        </form>
                    </div>
                )}
               <div className={styles.Andamento}>
                  <h1 className={styles.titulo}>
                     Em andamento
                   <button onClick={toggleFormulario} className={styles.botaoMais}>+</button> {/* Botão para mostrar o formulário */}
                  </h1>
                   <div className={styles.boxAndamento}>
                    {tarefas.map((tarefa, index) => {
                       if (tarefa.status === 'em andamento') {
                            return <div key={index} className={styles.quadro}>{tarefa.titulo}</div>;
                            }
                              return null;
                      })}
                    </div>
              </div>
                       {mostrarFormulario && ( // Renderizar o formulário apenas se mostrarFormulario for verdadeiro
                                  <div className={styles.modal}>
                                      <form onSubmit={handleSubmit} className={styles.form}>
                                          <input type="text" name="titulo" placeholder="Título" value={novaTarefa.titulo} onChange={handleInputChange} />
                                          <input type="text" name="descricao" placeholder="Descrição" value={novaTarefa.descricao} onChange={handleInputChange} />
                                          <input type="date" name="dataConclusao" placeholder="Data de Conclusão" value={novaTarefa.dataConclusao} onChange={handleInputChange} />
                                          <select name="prioridade" value={novaTarefa.prioridade} onChange={handleInputChange}>
                                              <option value="baixa">Baixa</option>
                                              <option value="média">Média</option>
                                              <option value="alta">Alta</option>
                                          </select>
                                          <select name="status" value={novaTarefa.status} onChange={handleInputChange}>
                                              <option value="pendente">Pendente</option>
                                              <option value="em andamento">Em Andamento</option>
                                              <option value="concluída">Concluída</option>
                                          </select>
                                          <button type="submit">Adicionar Tarefa</button>
                                      </form>
                                  </div>
                       )}
                        <div className={styles.concluida}>
                                <h1 className={styles.titulo}>
                                   Concluida
                                 <button onClick={toggleFormulario} className={styles.botaoMais}>+</button> {/* Botão para mostrar o formulário */}
                                </h1>
                                 <div className={styles.boxConcluida}>
                                  {tarefas.map((tarefa, index) => {
                                     if (tarefa.status === 'em andamento') {
                                          return <div key={index} className={styles.quadro}>{tarefa.titulo}</div>;
                                          }
                                         return null;
                                    })}
                                 </div>
                        </div>
                       {mostrarFormulario && ( // Renderizar o formulário apenas se mostrarFormulario for verdadeiro
                                                <div className={styles.modal}>
                                                    <form onSubmit={handleSubmit} className={styles.form}>
                                                        <input type="text" name="titulo" placeholder="Título" value={novaTarefa.titulo} onChange={handleInputChange} />
                                                        <input type="text" name="descricao" placeholder="Descrição" value={novaTarefa.descricao} onChange={handleInputChange} />
                                                        <input type="date" name="dataConclusao" placeholder="Data de Conclusão" value={novaTarefa.dataConclusao} onChange={handleInputChange} />
                                                        <select name="prioridade" value={novaTarefa.prioridade} onChange={handleInputChange}>
                                                            <option value="baixa">Baixa</option>
                                                            <option value="média">Média</option>
                                                            <option value="alta">Alta</option>
                                                        </select>
                                                        <select name="status" value={novaTarefa.status} onChange={handleInputChange}>
                                                            <option value="pendente">Pendente</option>
                                                            <option value="em andamento">Em Andamento</option>
                                                            <option value="concluída">Concluída</option>
                                                        </select>
                                                        <button type="submit">Adicionar Tarefa</button>
                                                    </form>
                                                </div>
                                     )}
            </div>
        );
}
