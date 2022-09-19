import React, { ReactNode } from "react";

const bar = "w-full h-0.5 bg-secondary";

const SectionHeader: React.FC<{children?: ReactNode}> = ({ children }) => {
    return (
            <span className="w-full flex justify-center items-center space-x-4">
                <div className={bar} />
                <span className="whitespace-nowrap">{children}</span>
                <div className={bar} />
            </span>
    );
}

export default SectionHeader;