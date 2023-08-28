import React from 'react';

import styles from'./Header.module.css';

import ingniteLogo from  '../assets/ignite-logo.svg';



export function Header(){
    return (
    
    <header className={styles.header}>
       <img src={ingniteLogo} alt='Logo do Ingnite'/>
    </header>
   
    );
}