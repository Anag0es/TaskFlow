import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import FormsTarefas from '../FormsTarefas';

export default function GerenciadorDeTarefas() {
    const [tarefas, setTarefas] = useState({ pendentes: [], emAndamento: [], concluidas: [] });
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        prioridade: '',
        status: 'PENDENTE'
    });

    useEffect(() => {
        const fetchTarefas = async () => {
            try {
                const { data } = await axios.get('http://localhost:8080/tarefas/create', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('userToken')}`
                    }
                });
                const tarefasOrganizadas = data.reduce((acc, tarefa) => {
                    acc[tarefa.status.toLowerCase()].push(tarefa);
                    return acc;
                }, { pendentes: [], emAndamento: [], concluidas: [] });
                setTarefas(tarefasOrganizadas);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        };
        fetchTarefas();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post('http://localhost:8080/tarefas/create', formData, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        console.log('Novo card criado:', data);
        setTarefas(prevTarefas => {
            const updatedTarefas = { ...prevTarefas };
            const statusKey = data.status.toLowerCase();
            if (!updatedTarefas[statusKey]) {
                updatedTarefas[statusKey] = [];
            }
            updatedTarefas[statusKey].push(data);
            return updatedTarefas;
        });
        setShowCreateCard(false);
        setFormData({ titulo: '', descricao: '', prioridade: '', status: 'PENDENTE' });
    } catch (error) {
        console.error('Erro ao criar novo card:', error);
    }
};


    return (
        <div className={styles.container}>
            <button onClick={() => setShowCreateCard(true)} className={styles.buttonCriar}>Criar Nova Tarefa</button>
            {/* Utilize o componente Modal com as props necessárias */}
            <FormsTarefas
                show={showCreateCard}
                onClose={() => setShowCreateCard(false)}
                onSubmit={handleSubmit}
                formData={formData}
                handleInputChange={handleInputChange}
            />

            <div className={styles.tarefaContainer}>
                <h2>Pendentes</h2>
                {tarefas.pendentes.map((tarefa) => (
                    <div key={tarefa.id} className={styles.tarefaCard}>
                        <h3>{tarefa.titulo}</h3>
                        <p>{tarefa.descricao}</p>
                    </div>
                ))}

                <h2>Em Andamento</h2>
                {tarefas.emAndamento.map((tarefa) => (
                    <div key={tarefa.id} className={styles.tarefaCard}>
                        <h3>{tarefa.titulo}</h3>
                        <p>{tarefa.descricao}</p>
                    </div>
                ))}

                <h2>Concluídas</h2>
                {tarefas.concluidas.map((tarefa) => (
                    <div key={tarefa.id} className={styles.tarefaCard}>
                        <h3>{tarefa.titulo}</h3>
                        <p>{tarefa.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
