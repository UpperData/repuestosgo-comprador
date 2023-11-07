import React from 'react';
import Link from 'next/link';
import MenuDropdown from '~/components/elements/menu/MenuDropdown';
import MegaMenu from '~/components/elements/menu/MegaMenu';
import { useSelector } from 'react-redux';

const Menu = ({ source, className }) => {

    const menudata = useSelector((state) => state.app.menu);
    console.log(menudata);

    // Views
    let menuView;
    if (source) {
        menuView = menudata.map((item) => {
            if (item.subMenu) {
                return <MenuDropdown source={item} key={item.text} />;
            } else if (item.megaContent) {
                return <MegaMenu source={item} key={item.text} />;
            } else {
                return (
                    <li key={item.id}>
                        <Link href={`/shop`}>
                            <a>
                                {/*item.icon && <i className={item.icon}></i>*/}
                                {item.name}
                            </a>
                        </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    No menu item.
                </a>
            </li>
        );
    }
    return <ul className={className}>{menuView}</ul>;
};

export default Menu;
