import styles from "./footer.module.css";
const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Tasks: {completedTodos}</span>
      <span className={styles.item}> Total tasks:{totalTodos}</span>
    </div>
  );
};

export default Footer;
