import React from 'react';
import '../../styles/product.scss';
import MyButton from "../elements/buttons/MyButton";

const DetailProduct = ({dataDetail}) => {
    return (
            <div className="product__body">
                <div className="product__body__info">
                    <h3 className="product__body__info__name">Product highlights</h3>
                    <div className="product__body__info__detail">
                        <ul>
                            {dataDetail.highlights.map((item, index) => (
                                <li key={index}>
                                    <i className="bi bi-check-circle-fill"></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="product__body__market">
                    <h3 className="product__body__market__name">Product highlights</h3>
                    {dataDetail.market.map((item, index) => (
                        <div className="product__body__market__group" key={index}>
                            <div>
                                <i className={item.icon}></i>
                                <span>{item.name}</span>
                            </div>
                            <MyButton style={"product__body__market__group__btn"} href={item.link}>
                                <span>Click me</span>
                            </MyButton>
                            {/*<a href={item.link}>*/}
                            {/*    <button className="product__body__market__group__btn">Click me</button>*/}
                            {/*</a>*/}
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default DetailProduct;