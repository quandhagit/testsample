import styles from "./description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <div className={styles.description_title}>
        Lorem ipsum dolor sit asmet?
      </div>
      <div className={styles.description_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
        consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat
        hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in
        mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut
        mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo.
        Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus
        vestibulum. Phasellus congue mollis orci, sit amet luctus augue
        tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque
        a.
      </div>
    </div>
  );
};

export default Description;
