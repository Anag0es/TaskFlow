import styles from './styles.module.css';
import React, { useState } from 'react';


export default function Tarefas(){
    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    function handleAdd(){
        setTarefas([...tarefas, input]);
        setInput('');
    }

    function handleDelete(index){
        let newTarefas = tarefas.filter((tarefa, i) => {
            return i !== index;
        });
        setTarefas(newTarefas);
    }

    return(
        <div className={styles.container}>
            <div className={styles.tarefas}>
                <h1>Lista de Tarefas</h1>
                <ul>
                    {tarefas.map((tarefa, index) => (
                        <li key={index}>
                            {tarefa}
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleAdd}>Adicionar</button>
            </div>
        </div>
    );
}