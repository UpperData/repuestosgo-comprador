import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import Link from 'next/link';
import AccountQuickLinksMobile from './AccountQuickLinksMobile';

const MobileHeaderActions = ({ auth, ecomerce }) => {

    const session = useSelector((state) => state.session);
    const { cartItems } = ecomerce;

    return (
        <div className="navigation__right">
            <Link href="/account/shopping-cart">
                <a className="header__extra" href="#">
                    <i className="icon-bag2"></i>
                    <span>
                        <i>{cartItems ? cartItems.length : 0}</i>
                    </span>
                </a>
            </Link>

            {session.auth && Boolean(session.auth) === true ? (
                <AccountQuickLinksMobile />
            ) : (
                <div className="header__extra">
                    <Link href="/account/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default connect((state) => state)(MobileHeaderActions);
