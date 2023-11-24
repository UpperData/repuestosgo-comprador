import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ProductOnCart from '~/components/elements/products/ProductOnCart';
import useEcomerce from '~/hooks/useEcomerce';
import { calculateAmount, calculateCartAmount } from '~/utilities/ecomerce-helpers';
import useShop from '~/hooks/useShop';

const MiniCart = () => {
    //const { products, removeItem, removeItems, getProducts } = useEcomerce();
    const { getProducts, products, removeItem } = useShop();

    function handleRemoveItem(e, productId) {
        e.preventDefault();
        console.log('remove', productId);
        removeItem(productId);
    }

    useEffect(() => {
        getProducts();
    }, []);

    let cartItemsView;
    if (products && products.length > 0) {
        const amount = calculateCartAmount(products);
        const productItems = products.map((item) => {
            return (
                <ProductOnCart product={item} key={item.id}>
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveItem(e, item.id)}
                    >
                        <i className="icon-cross"></i>
                    </a>
                </ProductOnCart>
            );
        });
        cartItemsView = (
            <div className="ps-cart__content">
                <div className="ps-cart__items">{productItems}</div>
                <div className="ps-cart__footer">
                    <h3>
                        Sub Total:
                        <strong>${amount ? amount : 0}</strong>
                    </h3>
                   
                    <figure>
                        <Link href="/account/shopping-cart">
                            <a className="ps-btn text-white">Ver carrito</a>
                        </Link>
                        <Link href="/account/checkout">
                            <a className="ps-btn text-white">Pagar</a>
                        </Link>
                    </figure>
                   
                </div>
            </div>
        );
    } else {
        cartItemsView = (
            <div className="ps-cart__content">
                <div className="ps-cart__items">
                    <span>Su carrito está vacío</span>
                </div>
            </div>
        );
    }

    return (
        <div className="ps-cart--mini">
            <a className="header__extra" href="#">
                <i className="icon-bag2"></i>
                <span>
                    <i>{products ? products.length : 0}</i>
                </span>
            </a>
            {cartItemsView}
        </div>
    );
};

export default MiniCart;
