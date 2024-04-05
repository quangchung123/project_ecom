import React, {useMemo, useState} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../styles/product.scss';
import {winner} from "../../constant/user";
import {handleDataDetail} from "../../utils/help";
import DetailProduct from "./DetailProduct";
import _ from 'lodash';
import MyButton from "../elements/buttons/MyButton";
const ItemProduct = ({product}) => {
    const [showDetail, setShowDetail] = useState(false);
    const {isWinner, description, details, img, sale, title} = product;
    const dataDetail = handleDataDetail(details);
    _.get(dataDetail, "");
    const handleShowDetail = () => {
        setShowDetail(!showDetail)
    }
    return (
        <div className="product">
            <div className="product__header">
                {isWinner && (
                    <div className="product__header__banner">
                            <span className="product__header__product__title">
                                {winner}
                            </span>
                    </div>
                )}
                <div className="product__header__image">
                    <img
                        src={img}
                        alt={""}
                        className="product__header__image__product"
                    />
                </div>
                <div className="product__header__title">
                    <div className="product__header__title__info">
                        <h3 className="product__header__title__info__brand">{title}</h3>
                        <span className="product__header__title__info__discount">{sale} OFF</span>
                    </div>
                    <p className="product__header__title__description">
                        {description}
                    </p>
                    <div className="product__header__title__mobile"></div>
                    <div className="product__header__title__actions">
                        <span className="product__header__title__actions__feature">
                            Product features
                        </span>
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="product__header__price">
                    <div className="product__header__price__score">
                        <span className="product__header__price__score__value">9.8</span>
                        {/*<i className="bi bi-emoji-smile"></i>*/}
                        <span>score</span>
                    </div>
                    <div className="product__header__price__group">
                        <MyButton onClick={handleShowDetail} style={"product__header__price__button"}>
                            <span>More Info</span>
                        </MyButton>
                        <div className="product__header__price__compare">
                            <p className="product__header__price__compare__text">Compare prices</p>
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

export default ItemProduct;