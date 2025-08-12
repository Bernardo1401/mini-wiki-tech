"use client";

import React from 'react';
import styles from './CardAppRouter.module.css';

const PesquisaComSaibaMais = ({ titulo, titulo1, conteudo1, titulo2, conteudo2, codigo1, codigo2, mostrarCodigos, onSaibaMais }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{titulo}</h1>
      <div className={styles.section}>
        <h2>{titulo1}</h2>
        <p>{conteudo1}</p>
      </div>
      <div className={styles.section}>
        <h2>{titulo2}</h2>
        <p>{conteudo2}</p>
      </div>
      <button className={styles.button} onClick={onSaibaMais}>
        {mostrarCodigos ? 'Ocultar Códigos' : 'Saiba Mais'}
      </button>
      {mostrarCodigos && (
        <div className={styles.codes}>
          <h3>Código 1</h3>
          <pre>
            <code>{codigo1}</code>
          </pre>
          <h3>Código 2</h3>
          <pre>
            <code>{codigo2}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default PesquisaComSaibaMais;