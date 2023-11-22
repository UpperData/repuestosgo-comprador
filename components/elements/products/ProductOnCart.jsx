import React from 'react';
import Link from 'next/link';
import useProduct from '~/hooks/useProduct';
import LazyLoad from 'react-lazyload';

const ProductOnCart = ({ product, children }) => {
    const { thumbnailImage, title } = useProduct();

    const data = product.data;

    return (
        <div className="ps-product--cart-mobile">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${data.articleId}`}>
                    <a>
                        <LazyLoad>
                            <img
                                src={data.photo.MainPhoto}
                                alt={`cart-product-${data.articleId}`}
                            />
                        </LazyLoad>
                    </a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${data.articleId}`}>
                    <a className="ps-product__title">{data.description}</a>
                </Link>
                <p>
                    <small>
                        ${data.price} x {product.quantity}
                    </small>
                </p>{' '}
                {children}
            </div>
        </div>
    );
};

export default ProductOnCart;
