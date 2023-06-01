import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="#" className={styles.active}>
        Home
      </a>
      <a href="#">Services</a>
      <a href="#">News</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default Sidebar;
