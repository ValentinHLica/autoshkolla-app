import React from "react";

import { open } from "@tauri-apps/api/shell";

import styles from "@styles/components/Footer/index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Developed with <span className={styles.heart} /> by
        <span
          onClick={async () => {
            await open("https://github.com/ValentinHLica");
          }}
        >
          Valentin Lica
        </span>
      </p>
    </footer>
  );
};

export default Footer;
