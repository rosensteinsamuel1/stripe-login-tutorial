import React from 'react';
import styles from './App.module.css';
import Login from './Login/Login'
import Layout from './Layout/Layout'

function App() {
  return (
    <div className={styles.Background}>
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default App;
