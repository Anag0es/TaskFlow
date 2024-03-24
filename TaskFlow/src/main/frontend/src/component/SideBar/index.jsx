import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

import logo from '../../assets/miniLogo.svg';
import user from '../../assets/user.svg';
import task from '../../assets/task.svg';
import graph from '../../assets/graph.svg';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logo} className={styles.imgLogo} alt="Logo"/>
            </div>
            <hr className={`${styles.hr} ${styles.verticalLine}`}/>
            <div className={styles.buttonContainer}>
                <Link to="/pagina1">
                        <img src={user} className={styles.iconLink} alt="user" />
                </Link>
                <Link to="/pagina2">
                        <img src={task} className={styles.iconLink} alt="task" />
                </Link>
                <Link to="/pagina3">
                        <img src={graph} className={styles.iconLink} alt="graph" />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
