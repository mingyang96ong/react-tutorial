import styles from "./InputText.module.css";

const InputText = (props) => {
  return (
    <div className={styles["input-text"]}>
      <div>
        <label>{props.label}</label>
      </div>
      <div>
        <input type={props.type} onChange={props.handler} value={props.value} ref={props.ref}></input>
      </div>
    </div>
  );
};

export default InputText;
