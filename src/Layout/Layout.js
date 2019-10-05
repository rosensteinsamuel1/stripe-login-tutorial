import React, {Component} from 'react';
import Header from '../Header/Header'
import SignUpButton from '../SignUpButton/SignUpButton';
import styles from './Layout.module.css';

class Layout extends Component {

    render() {
        return (
            <body>
                <div className={styles.Background}>
                    <Header />
                    <main>
                        {this.props.children}
                    </main>
                    <SignUpButton />
                </div>
            </body>
        )
    }
}

export default Layout;