import React, { useEffect } from 'react';
import Link from 'next/link';
import Menu from '~/components/elements/menu/Menu';
import CurrencyDropdown from '~/components/shared/headers/modules/CurrencyDropdown';
import AccountQuickLinks from '~/components/shared/headers/modules/AccountQuickLinks';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import MiniCart from '~/components/shared/headers/modules/MiniCart';
import { stickyHeader } from '~/utilities/common-helpers';
import { useSelector } from 'react-redux';

const HeaderAutoPart = () => {

    const menudata = useSelector((state) => state.app.menu);

    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const menuAutopart = [
        {
            text: 'Interior',
            url: '/shop',
        },
        {
            text: 'Exterior',
            url: '/shop',
        },
        {
            text: 'Accesorios',
            url: '/shop',
        },
        {
            text: 'Herramientas',
            url: '/shop',
        },
        {
            text: 'Autopartes',
            url: '/shop',
        },
        {
            text: 'Pintura',
            url: '/shop',
        },
    ];

    const menuAutopartCategories = [
        'Interior',
        'Exterior',
        'Neumaticos',
        'Accesorios',
        'Herramientas',
        'Autopartes',
        'Pintura'
    ];
    
    // views
    const menuCategoriesView = menudata.map((item, key) => (
        <li key={key}>
            <Link href="/shop">
                <a>
                    {item.name}
                </a>
            </Link>
        </li>
    ));

    return (
        <header
            className="header header--standard header--autopart"
            id="headerSticky">
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
                        <p>
                            <strong>Servicio al cliente</strong> 24/7
                        </p>
                    </div>
                    <div className="header__right">
                        <ul className="header__top-links">
                            <li>
                                <Link 
                                    //href="/account/order-tracking"
                                    href={``}
                                >
                                    <a>Encuentra tu pedido</a>
                                </Link>
                            </li>
                            {/* 
                            <li>
                                <CurrencyDropdown />
                            </li>
                            */}
                            <li>
                                <AccountQuickLinks isLoggedIn={false} />
                                {/*  {auth.isLoggedIn &&
                                Boolean(auth.isLoggedIn) === true ? (
                                    <AccountQuickLinks isLoggedIn={true} />
                                ) : (
                                    <AccountQuickLinks isLoggedIn={false} />
                                )}*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__content">
                <div className="container">
                    <div className="header__content-left">
                        <Link href="/">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo/logo-b.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span>
                                    Catálogo 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                            </div>
                            <div className="menu__content">
                                <ul className="menu--dropdown">
                                    {menuCategoriesView}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__content-center">
                        <SearchHeader />
                    </div>
                    <div className="header__content-right">
                        <div className="header__actions">
                            <div className="ps-block--header-hotline">
                                <div className="ps-block__left">
                                    <i className="icon-telephone"></i>
                                </div>
                                <div className="ps-block__right">
                                    <p>
                                        Teléfono
                                        <strong>+58 412-9502391</strong>
                                    </p>
                                </div>
                            </div>
                            <MiniCart />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navigation">
                <div className="container">
                    <Menu
                        source={menuAutopart}
                        className="menu menu--technology"
                    />
                </div>
            </nav>
        </header>
    );
};

export default HeaderAutoPart;
