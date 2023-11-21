import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;
    let brand = product.filter[1].brand.name;

    if (product.is_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">&{product.sale_price}</del>$
                {product.price}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">${product.price}</h4>;
    }
    return (
        <header>
            <h1>{product.description}</h1>
            <div className="ps-product__meta">
                <p>
                    Marca:
                    <Link href="/shop">
                        <a className="ml-2 text-capitalize">{brand}</a>
                    </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating />
                    {/* 
                        <span>(1 review)</span>
                    */}
                </div>
            </div>
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
