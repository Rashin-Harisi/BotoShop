/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helpers/helper";

import styles from "./Sidebar.module.css";
import { categories } from "../constants/list";

const Sidebar = ({ query, setQuery }) => {
  const categoryClickHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName == !"LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryClickHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={item.type.toLocaleLowerCase() === query.category ? styles.selected : null}
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
