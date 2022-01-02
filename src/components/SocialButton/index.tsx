import React from "react";
import styles from "./SocialButton.module.css"

const SocialButton: React.FC<{ link?: string, title?: string, target?: "_self" | "_blank" }> = ({ children, link, title, target = "_blank"}) => {
    return (
            <a href={link} target={target} className={styles.social} rel="noreferrer" title={title}>
                {children}
            </a>
    )

}

export default SocialButton;