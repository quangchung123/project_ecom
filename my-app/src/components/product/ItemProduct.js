import React, {useMemo, useState} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../styles/product.scss';
import { memo } from 'react';
import {winner} from "../../constant/user";
import {handleDataDetail} from "../../utils/help";
import DetailProduct from "./DetailProduct";
const ItemProduct = ({product}) => {
    const [showDetail, setShowDetail] = useState(false);
    const {isWinner, description, details, img, sale, title} = product;
    const dataDetail = useMemo(() => handleDataDetail(details), [details]);

    return (
        <div className="container">
            <div className="container__header">
                {isWinner && (
                    <div className="container__header__banner">
                            <span className="container__header__product__title">
                                {winner}
                            </span>
                    </div>
                )}
                <div className="container__header__image">
                    <img
                        src={img}
                        alt={""}
                        className="container__header__image__product"
                    />
                </div>
                <div className="container__header__title">
                    <div className="container__header__title__info">
                        <h3 className="container__header__title__info__brand">{title}</h3>
                        <span className="container__header__title__info__discount">{sale} OFF</span>
                    </div>
                    <p className="container__header__title__description">
                        {description}
                    </p>
                    <div className="container__header__title__mobile"></div>
                    <div className="container__header__title__actions">
                        <span className="container__header__title__actions__feature">
                            Product features
                        </span>
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="container__header__price">
                    <div className="container__header__price__score">
                        <span className="container__header__price__score__value">9.8</span>
                        {/*<i className="bi bi-emoji-smile"></i>*/}
                        <span>score</span>
                    </div>
                    <div className="container__header__price__group">
                        <button className="container__header__price__button" onClick={() => setShowDetail(!showDetail)}>More Info</button>
                        <div className="container__header__price__compare">
                            <p className="container__header__price__compare__text">Compare prices</p>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            {
                showDetail && <DetailProduct dataDetail={dataDetail}/>
            }
        </div>
    );
};

export default memo(ItemProduct);