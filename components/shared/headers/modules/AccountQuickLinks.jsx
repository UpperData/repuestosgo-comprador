import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useAuth } from '~/context/auth';

const AccountQuickLinks = (props) => {
    const auth     = useAuth();
    const accountLinks = [
        {
            text: 'Perfil de usuario',
            url: '/account/profile',
        }
    ];

    const { isLoggedIn } = props;

    const session = useSelector((state) => state.session);

    // View
    const linksView = accountLinks.map((item) => (
        <li key={item.text}>
            <Link href={item.url}>
                <a>{item.text}</a>
            </Link>
        </li>
    ));

    if (session.auth === true) {

        const userEmail = session.user.email;

        return (
            <div className="ps-block--user-account">
                <span>
                    <i className="icon-user d-none" style={{ fontSize: 16}} />
                    <span className='ml-2'>{userEmail}</span>
                </span>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {linksView}
                        <li className="ps-block__footer">
                            <a 
                                href="#" 
                                onClick={() => auth.handleLogout()}
                            >
                                Cerrar sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i className="icon-user"></i>
                </div>
                <div className="ps-block__right">
                    <Link href="/account/login">
                        <a>Iniciar sesión</a>
                    </Link>
                    <Link href="/account/register">
                        <a>Registro</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default connect((state) => state)(AccountQuickLinks);
