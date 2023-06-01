import styles from "./content.module.css";
import cssIcon from "../../../../assets/images/css-icon.png";
import htmlIcon from "../../../../assets/images/html-icon.png";
import urlIcon from "../../../../assets/images/url-icon.png";
import MainCard from "../../../../components/mainCard";

const contentData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    image: cssIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    image: htmlIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    image: urlIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];

const Content = () => {
  const generateCard = () => {
    return contentData.map((card) => {
      return (
        <MainCard
          key={card.id}
          title={card.title}
          image={card.image}
          content={card.content}
        />
      );
    });
  };

  return <div className={styles.content}>{generateCard()}</div>;
};

export default Content;
