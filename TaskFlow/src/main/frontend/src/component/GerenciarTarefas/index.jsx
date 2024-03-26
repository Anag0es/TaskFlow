import styles from './styles.module.css'
import React, { useState } from 'react';

export default function GerenciarTarefas(){
    return (
        <div className={styles.container}>
            <div className={styles.pendente}>
                <h1 className={styles.titulo}>Pendente</h1>
                <div className={styles.boxPendente}></div>
            </div>
            <div className={styles.andamento}>
                <h1 className={styles.titulo}>Em andamento</h1>
                <div className={styles.boxAndamento}></div>
           </div>
            <div className={styles.concluido}>
                <h1 className={styles.titulo}>Concluído</h1>
                <div className={styles.boxConcluida}></div>
            </div>
        </div>
    );
}
