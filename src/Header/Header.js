import React from 'react';
import styles from './Header.module.css';

const header = () => (
    <div className={styles.HeaderWraper}>
        <h1 className={styles.Header}><b>stripe</b></h1>
    </div>
);

export default header;