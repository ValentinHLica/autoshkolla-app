import React from "react";

import { LogoIcon } from "@icon";

import styles from "@styles/components/Header/index.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <LogoIcon />

          <h2>Autoshkolla</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;
