import styles from './Button.module.css';
const Button = (props) => {

    return (
        <div className={styles.button}>
            <button  type="submit" onClick={props.handler}>{props.children}</button>
        </div>
    )
}

export default Button;