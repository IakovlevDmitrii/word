import React from 'react';
import Word from '../word';
import styles from './AppLayout.module.scss';

function AppLayout() {
  return (
    <div className={styles.content}>
      <Word />
    </div>
  )
}

export default AppLayout;
