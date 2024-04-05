import React from 'react';
const MyButton = ({children,onClick, style, href}) => {
    return (
        <div>
            <a href={href}>
                <button onClick={onClick} className={style}>
                    {children}
                </button>
            </a>
        </div>
    );
};

export default MyButton;