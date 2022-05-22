import React, { ReactNode } from "react";
import styles from "./SocialButton.module.css"

const SocialButton: React.FC<{ children?: ReactNode, link?: string, title?: string, target?: "_self" | "_blank" }> = ({ children, link, title, target = "_blank"}) => {
    const displayTitle = () => {
        if(title && !link)
            return <p>{title}</p>
    }

    return (
            <a href={link} target={target} className={styles.social} rel="noreferrer" title={title}>
                {children}
                {displayTitle()}
            </a>
    )

}

export default SocialButton;