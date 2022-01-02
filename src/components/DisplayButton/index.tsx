import React from "react";
import styles from "./DisplayButton.module.css"

const DisplayButton: React.FC<{text: string}> = ({ text }) => {
    return (
            <div className={styles.textBorder}>
                <p>{text}</p>
            </div>
    )
};

export default DisplayButton;