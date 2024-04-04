import React from 'react';
import '../../styles/product.scss'

const DetailProduct = ({dataDetail}) => {
    return (
            <div className="container__body">
                <div className="container__body__info">
                    <h3 className="container__body__info__name">Product highlights</h3>
                    <div className="container__body__info__detail">
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
                <div className="container__body__market">
                    <h3 className="container__body__market__name">Product highlights</h3>
                    {dataDetail.market.map((item, index) => (
                        <div className="container__body__market__group" key={index}>
                            <div>
                                <i className={item.icon}></i>
                                <span>{item.name}</span>
                            </div>
                            <a href={item.link}>
                                <button className="container__body__market__group__btn">Click me</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default DetailProduct;