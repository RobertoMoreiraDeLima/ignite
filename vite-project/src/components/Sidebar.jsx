import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
          <img 
          className={styles.cover} 
          src="https://media.istockphoto.com/id/1414981473/pt/foto/futuristic-flight-through-a-digital-line-landscape-blue-dust-particle-abstract-background-3d.webp?b=1&s=170667a&w=0&k=20&c=meiqNKP_Hi4Q-NweKrjDUe_olLni9fCy54LeLbvO1dY=" />
           
           <div className={styles.profile}>
             
            <Avatar hasBorder src="https://avatars.githubusercontent.com/u/135069504?v=4"/>
            
    
            <strong>Roberto Moreira</strong>
            <span>Web Developer</span>
           </div>

           <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
           </footer>
        </aside>
    )
}
