import React, { useState } from 'react';
import styles from './styles.module.css';

export default function GerenciarTarefas({ userId }) { // Recebe userId como propriedade
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState({
        titulo: '',
        descricao: '',
        dataConclusao: '',
        prioridade: 'baixa',
        status: 'pendente',
        userId: userId // Adiciona userId à nova tarefa
    });


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
    };

    return (
        <div className={styles.container}>
            <div className={styles.pendente}>
                <h1 className={styles.titulo}>Pendente</h1>
                <div className={styles.boxPendente}>
                    {tarefas.map((tarefa, index) => {
                        if (tarefa.status === 'pendente') {
                            return <div key={index} className={styles.quadro}>{tarefa.titulo}</div>;
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className={styles.andamento}>
                <h1 className={styles.titulo}>Em andamento</h1>
                <div className={styles.boxAndamento}>
                    {tarefas.map((tarefa, index) => {
                        if (tarefa.status === 'em andamento') {
                            return <div key={index} className={styles.quadro}>{tarefa.titulo}</div>;
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className={styles.concluido}>
                <h1 className={styles.titulo}>Concluído</h1>
                <div className={styles.boxConcluida}>
                    {tarefas.map((tarefa, index) => {
                        if (tarefa.status === 'concluída') {
                            return <div key={index} className={styles.quadro}>{tarefa.titulo}</div>;
                        }
                        return null;
                    })}
                </div>
            </div>
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
        </div>
    );
}
