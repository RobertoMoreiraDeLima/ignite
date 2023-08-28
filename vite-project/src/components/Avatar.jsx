import styles from './Avatar.module.css';


export function Avatar(props){
    return(
        <img className={props.hasBorder ? styles.avatarWithBorder : StyleSheet.avatar}
         src={props.src}/>

    );
}