import React from 'react';
import { Button } from 'reactstrap';
import styles from './SignUpButton.module.css'

const signUpbutton = () => (
    <div className={styles.SignUpButton}>
        <Button color="primary" size="lg" block>
            <p>Don't have an account? <a href="/#">Sign up</a></p>
        </Button>
    </div>
);

export default signUpbutton;