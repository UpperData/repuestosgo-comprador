import React, { useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { calculateAmount, calculateCartAmount, calculateCartQuantity } from '~/utilities/ecomerce-helpers';
import useShop from '~/hooks/useShop';

const ModulePaymentOrderSummary = ({ shop, shipping }) => {
    const { products, getProducts } = useShop();

    useEffect(() => {
        /*
            if (ecomerce.cartItems) {
                getProducts(ecomerce.cartItems, 'cart');
            }
        */
    }, []);

    // view
    let listItemsView, shippingView, totalView;
    let amount;
    if (products && products.length > 0) {
        amount = calculateCartAmount(products);
        listItemsView = products.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id}>
                <a>
                    <strong>
                        {item.data.description}
                        <span>x{item.quantity}</span>
                    </strong>
                    <small>${item.quantity * item.data.price}</small>
                </a>
            </Link>
        ));
    } else {
        listItemsView = <p>No ha seleccionado ningún producto.</p>;
    }
    if (shipping === true) {
        shippingView = (
            <figure>
                <figcaption>
                    <strong>Shipping Fee</strong>
                    <small>$20.00</small>
                </figcaption>
            </figure>
        );
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Total
                    <strong>${parseInt(amount) + 20}.00</strong>
                </h3>
            </figure>
        );
    } else {
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Total
                    <strong>${parseInt(amount)}.00</strong>
                </h3>
            </figure>
        );
    }
    return (
        <div className="ps-block--checkout-order">
            <div className="ps-block__content">
                <figure>
                    <figcaption>
                        <strong>Producto</strong>
                        <strong>total</strong>
                    </figcaption>
                </figure>
                <figure className="ps-block__items">{listItemsView}</figure>
                <figure>
                    <figcaption>
                        <strong>Subtotal</strong>
                        <small>${amount}</small>
                    </figcaption>
                </figure>
                {shippingView}
                {totalView}
            </div>
        </div>
    );
};
export default connect((state) => state)(ModulePaymentOrderSummary);
