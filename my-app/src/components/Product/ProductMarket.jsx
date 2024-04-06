import React from 'react';
import MyButton from "../Elements/Buttons/MyButton";

const ProductMarket = ({data}) => {
    return (
        <React.Fragment>
            {data.market.map((item, index) => (
                <div className="product__body__market__group" key={index}>
                    <div>
                        <i className={item.icon}></i>
                        <span>{item.name}</span>
                    </div>
                    <MyButton styleModify={"product__body__market__group--btn"} href={item.link}>
                        <span>Click me</span>
                    </MyButton>
                </div>
            ))}
        </React.Fragment>
    );
};

export default ProductMarket;