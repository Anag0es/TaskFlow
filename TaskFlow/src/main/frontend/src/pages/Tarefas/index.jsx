import styles from './styles.module.css';
import React, { useState } from 'react';

import SideBar from '../../component/SideBar';

export default function Tarefas(){
    return(
        <div className={styles.container}>
            <SideBar/>
            <div className={styles.content}>
                <div className={styles.tarefas}>
                   <h1>Tarefas</h1>
                </div>
                <div className={styles.pendente}>
                </div>
            </div>
        </div>
    );
}