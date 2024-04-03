import React, {useMemo, useState} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/product.css';
import { memo } from 'react';
import {winner} from "../constant/user";
import {handleDataDetail} from "../utils/help";
const ItemProduct = ({product}) => {
    const [showDetail, setShowDetail] = useState(false);
    const {isWinner, description, details, img, sale, title} = product;
    const dataDetail = useMemo(() => handleDataDetail(details), [details]);

    return (
        <div className="container">
            <div className="container__header">
                <div className="container-header__product">
                    <div className="container-header-product__item">
                        {isWinner && (
                        <div className="container-header-product-item__title">

                                <p className="container-header-product-item-title__detail">
                                    {winner}
                                </p>
                        </div>
                        )}

                    </div>
                    <div className="container-header-product__item">
                        <img
                            src={img}
                            className="container-header-product-item__image"
                        />
                    </div>
                </div>
                <div className="container-header__title">
                    <div className="container-header-title__info">
                        <h3 className="container-header-title-info__brand">{title}</h3>
                        <div className="container-header-title-info__discount">
                            <p>{sale} OFF</p>
                        </div>
                    </div>
                    <div className="container-header-title__description">
                        <p className="container-header-title-description__text">
                            {description}
                        </p>
                    </div>
                    <div className="container-header-title__mobile"></div>
                    <div className="container-header-title__actions">
                        <p className="container-header-title-actions__feature">
                            Product features
                        </p>
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="container-header__price">
                    <div className="container-header-price__score">
                        <p className="container-header-price-score__value">9.8</p>
                        <i className="container-header-price-score__icon">
                            <i className="fa fa-smile-o" aria-hidden="true"></i>
                            score</i
                        >
                    </div>
                    <div className="container-header-price__group">
                        <div>
                            <button className="container-header-price__button" onClick={() => setShowDetail(!showDetail)}>More Info</button>
                        </div>
                        <div className="container-header-price__compare">
                            <p className="container-header-price-compare__text">Compare prices</p>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            {
                showDetail && (
                    <div className="container__body">
                        <div className="container-body__nameProduct">
                            <div className="container-body-nameProduct__name">Product highlights</div>
                            <div className="container-body-nameProduct__list">
                                <ul>
                                    {dataDetail.highlights.map((item) => (
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="container-body__market">
                            <div className="container-body-market__name">Product highlights</div>
                            <div className="container-body-market-name__group">
                                {
                                    dataDetail.market.map((item) => (
                                        <div className="container-body-market-name-group__market">
                                            <div className="left">
                                                <div>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div>
                                                    <span>{item.name}</span>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <a href={item.link}>
                                                    <button className="container-body-market-name-group-market__btn">
                                                        Click me
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default memo(ItemProduct);