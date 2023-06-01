import React from "react";
import styles from "./mainContent.module.css";
import logo from "../../assets/images/logoNCC.png";
import Description from "./components/description";
import Content from "./components/content";
import Footer from "./components/footer";

const MainContent = () => {
  return (
    <div className={styles.main_content}>
      <div className={styles.main_content_body}>
        <div className={styles.logo_container}>
          <img src={logo} alt="Logo" width={310} height={122} />
        </div>
        <Description />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;
