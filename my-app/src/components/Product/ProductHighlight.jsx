import React from 'react';

const ProductHighlight = ({data}) => {
    return (
        <div className="product__body__info__detail">
            <ul>
                {data.highlights.map((item, index) => (
                    <li key={index}>
                        <i className="bi bi-check-circle-fill"></i>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductHighlight;