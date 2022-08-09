import styles from "./UserList.module.css";
const UserList = (props) => {
  return (
    <div className={styles.userlist}>
      {props.userlist.map((user) => {
        return (
          <div className={`${styles.userlist} ${styles.inner}`} key={user.id}>
            <p>{`${user.username} (${user.age} years old)`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
