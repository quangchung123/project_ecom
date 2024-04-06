import React from 'react';
const MyButton = ({children,onClick, styleModify, href}) => {
    return (
        <div>
            <a href={href}>
                <button onClick={onClick} className={styleModify}>
                    {children}
                </button>
            </a>
        </div>
    );
};

export default MyButton;