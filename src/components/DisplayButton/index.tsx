import React from "react";
import styles from "./DisplayButton.module.css"

const DisplayButton: React.FC = ({ children }) => {
    return (
            <div className={styles.textBorder}>
                {children}
            </div>
    )
};

export default DisplayButton;