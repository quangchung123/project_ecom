import React from 'react';
import '@/styles/_product.scss';
import ProductMarket from "./ProductMarket";
import ProductHighlight from "./ProductHighlight";

const ProductDetail = ({dataDetail}) => {
    const data = dataDetail[0];
    return (
            <div className="product__body">
                <div className="product__body__info">
                    <h3 className="product__body__info__name">Product highlights</h3>
                    <ProductHighlight data={data}/>
                </div>
                <div className="product__body__market">
                    <h3 className="product__body__market__name">Product highlights</h3>
                    <ProductMarket data={data}/>
                </div>
            </div>
    );
};

export default ProductDetail;