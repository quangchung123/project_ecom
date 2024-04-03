import React from 'react';
import ItemProduct from "../../components/ItemProduct";
import {listData} from "../../config";
import '../../styles/listproduct.css'

const ShowListProduct = () => {
    const dataProduct = [...listData];
    return (
        <div className="list-product">
                {
                    dataProduct.map((product, index) => (
                        <ItemProduct  product={product}/>
                    ))
                }
        </div>
    );
};

export default ShowListProduct;