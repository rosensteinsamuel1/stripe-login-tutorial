import React from 'react';
import styles from './App.module.css';
import LoginCard from './LoginCard/LoginCard'
import Layout from './Layout/Layout'

function App() {
  return (
    <div className={styles.wrap}>
      <Layout>
        <LoginCard />
      </Layout>
    </div>
  );
}

export default App;
