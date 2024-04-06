import React from 'react';
import  ProductItem from "../../components/Product/ProductItem";
import {listData} from "../../config";
import '../../styles/_productlist.scss'

const ProductList = () => {
    const dataProduct = [...listData];
    return (
        <div className="product-list">
                {
                    dataProduct.map((product, index) => (
                        <div key={index}>
                            <ProductItem product={product}/>
                        </div>
                    ))
                }
        </div>
    );
};

export default ProductList;