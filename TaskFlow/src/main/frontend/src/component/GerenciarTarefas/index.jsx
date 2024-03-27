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

    // Estado para controlar qual formulário mostrar
    const [mostrarFormulario, setMostrarFormulario] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovaTarefa({ ...novaTarefa, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa({
            titulo: '',
            descricao: '',
            dataConclusao: '',
            prioridade: 'baixa',
            status: 'pendente',
            userId: userId
        });
        setMostrarFormulario(null); // Após enviar, esconder o formulário
    };

    const toggleFormulario = (status) => {
        setMostrarFormulario(mostrarFormulario === status ? null : status); // Alternar a visibilidade do formulário
    };

    // Refatoração do código para a renderização do formulário baseado no estado 'mostrarFormulario'
const renderFormularioModal = () => (
<>
        <div className={mostrarFormulario ? `${styles.modalBackdrop} ${styles.active}` : styles.modalBackdrop}></div>
        <div className={mostrarFormulario ? `${styles.modal} ${styles.modalActive}` : styles.modal}>
                <form onSubmit={handleSubmit} className={styles.form}>
                            <input type="text" name="titulo" placeholder="Título" value={novaTarefa.titulo} onChange={handleInputChange} className={styles.inputForms} />
                            <input type="text" name="descricao" placeholder="Descrição" value={novaTarefa.descricao} onChange={handleInputChange} className={styles.inputForms}/>
                            <input type="date" name="dataConclusao" placeholder="Data de Conclusão" value={novaTarefa.dataConclusao} onChange={handleInputChange} className={styles.inputForms}/>
                            <select name="prioridade" value={novaTarefa.prioridade} onChange={handleInputChange} className={styles.selectForms}>
                                <option value="baixa">Baixa</option>
                                <option value="média">Média</option>
                                <option value="alta">Alta</option>
                            </select>
                            <select name="status" value={novaTarefa.status} onChange={handleInputChange} className={styles.selectForms}>
                                <option value="pendente">Pendente</option>
                                <option value="em andamento">Em Andamento</option>
                                <option value="concluída">Concluída</option>
                            </select>
                            <button type="submit">Adicionar Tarefa</button>
                        </form>
        </div>
    </>
);

    return (
        <div className={styles.container}>
        <h1 className={styles.titulo}>
             Pendente
            <button onClick={() => toggleFormulario('pendente')} className={styles.botaoMais}>+</button>
            </h1>
            <div className={styles.tarefas}>
            <div className={styles.boxPendente}>
                {tarefas.filter(tarefa => tarefa.status === 'pendente').map((tarefa, index) => (
                    <div key={index}>{tarefa.titulo}</div>
                ))}
            </div>
            {mostrarFormulario === 'pendente' && renderFormularioModal()}

            <h1 className={styles.titulo}>
             Em andamento
            <button onClick={() => toggleFormulario('andamento')} className={styles.botaoMais}>+</button>
            </h1>
            <div className={styles.boxAndamento}>
                {tarefas.filter(tarefa => tarefa.status === 'andamento').map((tarefa, index) => (
                    <div key={index}>{tarefa.titulo}</div>
                ))}
            </div>
            {mostrarFormulario === 'andamento' && renderFormularioModal()}

            <h1 className={styles.titulo}>
             Concluído
            <button onClick={() => toggleFormulario('concluido')} className={styles.botaoMais}>+</button>
            </h1>
            <div className={styles.boxConcluida}>
                {tarefas.filter(tarefa => tarefa.status === 'concluido').map((tarefa, index) => (
                    <div key={index}>{tarefa.titulo}</div>
                ))}
            </div>
            {mostrarFormulario === 'concluido' && renderFormularioModal()}
        </div>
        </div>
    );
}

