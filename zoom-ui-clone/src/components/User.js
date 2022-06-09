import styles from "./User.module.css";

const User = (props) => {
  const { user } = props;
  return (
    <div className={styles.box}>
      <p className={styles.content}>{user.name}</p>
      <p className={styles.content}>{user.mute ? "mute" : "unmute"}</p>
    </div>
  );
};

export default User;
