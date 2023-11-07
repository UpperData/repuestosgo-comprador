import React from 'react';
import Link from 'next/link';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import Rating from '~/components/elements/Rating';
import LazyLoad from 'react-lazyload';
import { formatCurrency } from '~/utilities/product-helper';

const Product = ({ product }) => {
    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <Link 
                    href={''}
                    //href="/product/[pid]" 
                    //as={`/product/${product.id}`}
                >
                    <a>
                        <LazyLoad>
                            <img
                                src={`https://img.freepik.com/vector-premium/volante-carro_110233-1551.jpg`}
                                alt={product.description}
                            />
                        </LazyLoad>
                    </a>
                </Link>
                { 
                    //badge(product)
                }
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <Link 
                    href={''}
                    //href="/shop"
                >
                    <a className="ps-product__vendor">Young Shop</a>
                </Link>
                <div className="ps-product__content">
                    <Link 
                        href={``} 
                        as={``}
                    >
                        <a className="ps-product__title">
                            {product.description}
                        </a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>02</span>
                    </div>
                    <p className="ps-product__price">
                        <span>$</span>
                        {formatCurrency(product.price)}
                    </p>
                </div>
                <div className="ps-product__content hover">
                    <Link 
                        href={``} 
                        as={``}
                    >
                        <a className="ps-product__title">
                            {product.description}
                        </a>
                    </Link>
                    <p className="ps-product__price">
                        <span>$</span>
                        {formatCurrency(product.price)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;
