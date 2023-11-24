import React, { useEffect } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import ModuleEcomerceCartItems from '~/components/ecomerce/modules/ModuleEcomerceCartItems';
import Link from 'next/link';
import ModuleCartSummary from '~/components/ecomerce/modules/ModuleCartSummary';
import useShop from '~/hooks/useShop';

const ShoppingCartScreen = ({ ecomerce }) => {
    // const { products, getProducts } = useEcomerce();
    const { getProducts, products, removeItem } = useShop();

    
    useEffect(() => {
        /*
            if (ecomerce.cartItems) {
                getProducts(ecomerce.cartItems, 'cart');
            }
        */
    }, []);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Carrito de compras',
        },
    ];

    // View
    let contentView;
    if (products) {
        if (products.length > 0) {
            contentView = (
                <>
                    <div className="ps-section__content">
                        <ModuleEcomerceCartItems cartItems={products} />
                        <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a className="ps-btn text-white">Volver a la tienda</a>
                            </Link>
                        </div>
                    </div>
                    <div className="ps-section__footer">
                        <div className="row justify-space-between">
                            <div className="col-xl-8 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                {/*
                                <div className="row">
                                    <div className="col-lg-6">
                                        <figure>
                                            <figcaption>
                                                Cupón de descuento
                                            </figcaption>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Enter coupon here..."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <button className="ps-btn ps-btn--outline">
                                                    Aplicar
                                                </button>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                <ModuleCartSummary source={products} />
                                <Link href="/account/checkout">
                                    <a className="ps-btn text-white ps-btn--fullwidth">
                                        Proceder al pago
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            contentView = (
                <>
                    <div className="ps-section__content">
                        <div className="alert alert-info">
                            <p className="mb-0">
                                Tu carrito de compras esta vacío.
                            </p>
                        </div>

                        <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a className="ps-btn text-white">Volver a la tienda</a>
                            </Link>
                        </div>
                    </div>
                </>
            );
        }
    } else {
    }

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Shopping Cart">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="ps-section--shopping ps-shopping-cart">
                        <div className="container">
                            <div className="ps-section__header">
                                <h1>Carrito de compras</h1>
                            </div>
                            {contentView}
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default ShoppingCartScreen;
