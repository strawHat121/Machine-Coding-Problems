import User from "./User";
import styles from "./Users.module.css";

const Users = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <div className={styles.users}>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
