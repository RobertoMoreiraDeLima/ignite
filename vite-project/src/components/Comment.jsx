import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment ({content, onDeleteComment}) {

    function handleDeleteComment (){

        onDeleteComment(content);

    }

    return (
        <div className={styles.comment}>
             <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                         <strong>Mayk Brito</strong>
                         <time title='17 de agosto as 17:12:30' 
                         dateTime='2023-08-17 17:12:30'>Cerca de 1h atrás
                         </time>
                        </div>
                        <button onMouseDown={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>
                    
                    <p>
                      {content}
                    </p>

                </div>

                <footer>
                    <button>
                      <ThumbsUp/>
                      Aplaudir <span>20</span>
                    </button>


                </footer>
             </div>
        </div>
    )
}