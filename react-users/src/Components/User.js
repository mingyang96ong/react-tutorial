import InputText from "./UI/InputText";
import Button from "./UI/Button";
import styles from "./User.module.css";
import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import Wrapper from "./Helpers/Wrapper";
const User = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onChangeUserNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // We need to check first
    const user = {
      username: username,
      age: age,
      id: Math.random().toString(),
    };
    console.log(user);
    props.handler(user);
    setAge("");
    setUsername("");
  };

  const errorHandler = () => {
      setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <div className={styles.user}>
        <form>
          <InputText
            type="text"
            label="Username"
            value={username}
            handler={onChangeUserNameHandler}
          />
          <InputText
            type="number"
            label="Age (Years)"
            value={age}
            handler={onChangeAgeHandler}
          />
          <Button handler={onSubmitHandler}>Add User</Button>
        </form>
      </div>
    </Wrapper>
  );
};

export default User;
