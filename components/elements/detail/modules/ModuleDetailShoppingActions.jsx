import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import useEcomerce from '~/hooks/useEcomerce';
import useShop from '~/hooks/useShop';

const ModuleDetailShoppingActions = ({
    ecomerce,
    product,
    extended = false,
}) => {

    const [quantity, setQuantity] = useState(1);
    const Router = useRouter();

    const { addItem } = useEcomerce();
    const { addItemToCart } = useShop();

    function handleAddItemToCart(e) {
        e.preventDefault();
        addItemToCart({ 
            id: product.articleId, 
            quantity: quantity,
            data: null
        });
    }

    function handleBuynow(e) {
        e.preventDefault();

        /*
            addItem(
                { id: product.id, quantity: quantity },
                ecomerce.cartItems,
                'cart'
            );
            setTimeout(function () {
                Router.push('/account/checkout');
            }, 1000);
        */
    }

    const handleAddItemToCompare = (e) => {
        e.preventDefault();
        /*
            addItem({ id: product.id }, ecomerce.compareItems, 'compare');
            const modal = Modal.success({
                centered: true,
                title: 'Success!',
                content: `This product has been added to compare listing!`,
            });
            modal.update;
        */
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        /*
            addItem({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
            const modal = Modal.success({
                centered: true,
                title: 'Success!',
                content: `This item has been added to your wishlist`,
            });
            modal.update;
        */
    };

    function handleIncreaseItemQty(e) {
        e.preventDefault();
        setQuantity(quantity + 1);
    }

    function handleDecreaseItemQty(e) {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    if (!extended) {
        return (
            <div className="ps-product__shopping">
                <figure>
                    <figcaption>Cantidad</figcaption>
                    <div className="form-group--number">
                        <button
                            className="up"
                            onClick={(e) => handleIncreaseItemQty(e)}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button
                            className="down"
                            onClick={(e) => handleDecreaseItemQty(e)}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            placeholder={quantity}
                            disabled
                        />
                    </div>
                </figure>
                <a
                    className="ps-btn ps-btn--black"
                    href="#"
                    onClick={(e) => handleAddItemToCart(e)}>
                    Agregar al carrito
                </a>
                <a 
                    className="ps-btn text-white" 
                    href="#" 
                    // onClick={(e) => handleBuynow(e)}
                >
                    Comprar
                </a>
                {/* 
                    <div className="ps-product__actions">
                        <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                            <i className="icon-heart"></i>
                        </a>
                        <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
                            <i className="icon-chart-bars"></i>
                        </a>
                    </div>
                */}
            </div>
        );
    } else {
        return (
            <div className="ps-product__shopping extend">
                <div className="ps-product__btn-group">
                    <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={(e) => handleIncreaseItemQty(e)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={(e) => handleDecreaseItemQty(e)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Agregar al carrito
                    </a>
                    <div className="ps-product__actions">
                        <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                            <i className="icon-heart"></i>
                        </a>
                        <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
                            <i className="icon-chart-bars"></i>
                        </a>
                    </div>
                </div>
                <a className="ps-btn text-white" href="#" onClick={(e) => handleBuynow(e)}>
                    Comprar
                </a>
            </div>
        );
    }
};

export default ModuleDetailShoppingActions;
