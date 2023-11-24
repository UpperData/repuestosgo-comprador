import React from 'react';
import Link from 'next/link';
import useProduct from '~/hooks/useProduct';
import LazyLoad from 'react-lazyload';

const ProductCart = ({ product }) => {
    const { thumbnailImage, title } = useProduct();
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>
                        <LazyLoad>
                            <img
                                src={product.data.photo.MainPhoto}
                                alt={`cart-product-preview-${product.id}`}
                            />
                        </LazyLoad>
                    </a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.data.description}</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
