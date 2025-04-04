import React from 'react';
import { connect, useSelector } from 'react-redux';
import Link from 'next/link';
import MiniCart from '~/components/shared/headers/modules/MiniCart';
import AccountQuickLinks from '~/components/shared/headers/modules/AccountQuickLinks';

const HeaderActions = ({ ecomerce, auth }) => {
    const { compareItems, wishlistItems } = ecomerce;
    const session = useSelector((state) => state.session);
    // views
    let headerAuthView;
    
    if (session.auth && Boolean(session.auth) === true) {
        headerAuthView = <AccountQuickLinks isLoggedIn={true} />;
    } else {
        headerAuthView = <AccountQuickLinks isLoggedIn={false} />;
    }
    return (
        <div className="header__actions">
            <Link href="/account/compare">
                <a className="header__extra">
                    <i className="icon-chart-bars"></i>
                    <span>
                        <i>{compareItems ? compareItems.length : 0}</i>
                    </span>
                </a>
            </Link>
            <Link href="/account/wishlist">
                <a className="header__extra">
                    <i className="icon-heart"></i>
                    <span>
                        <i>{wishlistItems ? wishlistItems.length : 0}</i>
                    </span>
                </a>
            </Link>
            <MiniCart />
            {headerAuthView}
        </div>
    );
};

export default connect((state) => state)(HeaderActions);
