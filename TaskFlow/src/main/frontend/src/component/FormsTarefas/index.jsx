// Crie um novo componente para o modal
import React from 'react';
import styles from './style.module.css';

const FormsTarefas = ({ show, onClose, onSubmit, formData, handleInputChange }) => {
    if (!show) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <form onSubmit={onSubmit} className={styles.form}>
                    <input type="text" name="titulo" placeholder="Título" value={formData.titulo} onChange={handleInputChange} />
                    <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleInputChange} />
                    <select name="prioridade" value={formData.prioridade} onChange={handleInputChange} className={styles.selectPrioridade}>
                        <option value="">Selecione a Prioridade</option>
                        <option value="ALTA">Alta</option>
                        <option value="MEDIA">Média</option>
                        <option value="BAIXA">Baixa</option>
                    </select>
                    <select name="status" value={formData.status} onChange={handleInputChange} className={styles.selectStatus}>
                        <option value="PENDENTE">Pendente</option>
                        <option value="EM_ANDAMENTO">Em Andamento</option>
                        <option value="CONCLUIDA">Concluída</option>
                    </select>
                    <button type="submit" className={styles.buttonCriar}>Criar Tarefa</button>
                    <button onClick={onClose} className={styles.buttonCancelar}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default FormsTarefas;
