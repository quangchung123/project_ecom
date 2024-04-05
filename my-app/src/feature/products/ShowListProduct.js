import React from 'react';
import  ItemProduct from "../../components/product/ItemProduct";
import {listData} from "../../config";
import '../../styles/listproduct.scss'

const ShowListProduct = () => {
    const dataProduct = [...listData];
    return (
        <div className="list-product">
                {
                    dataProduct.map((product, index) => (
                        <div key={index}>
                            <ItemProduct  product={product}/>
                        </div>
                    ))
                }
        </div>
    );
};

export default ShowListProduct;