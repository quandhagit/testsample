import styles from "./mainCard.module.css";

const MainCard = ({ title, image, content }) => {
  return (
    <div className={styles.main_card}>
      <div className={styles.main_card_title}>{title}</div>
      <p className={styles.main_card_content}>
        <img src={image} alt={title} width={128} height={128} />
        {content}
      </p>
    </div>
  );
};

export default MainCard;
