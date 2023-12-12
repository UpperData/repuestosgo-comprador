import React from 'react';
import MyAccount from '~/components/partials/account/MyAccount';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useAuth } from '~/context/auth';

const MyAccountPage = () => {
    const auth = useAuth();
    const user = auth.session.user;

    const breadCrumb = [
        {
            text: 'Inicio',
            url: '/',
        },
        {
            text: 'Cuenta',
        },
        {
            text: 'Perfil',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="My Account">
                <div>
                    <BreadCrumb breacrumb={breadCrumb} />
                    <section className='py-5'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    <div className="ps-section__left">
                                        <aside className="ps-widget--account-dashboard">
                                            <div className="ps-widget__content">
                                                <ul>
                                                    <li className="active">
                                                        <Link href="/account/profile">
                                                            <a>Perfil</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/account/my-account">
                                                            <a>Cerrar sesión</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="ps-widget__header">
                                                {/* 
                                                    <img src="/static/img/users/3.jpg" />
                                                */}
                                                
                                                <figure>
                                                    <figcaption>
                                                        {user.people.firstName} {user.people.lastName}
                                                    </figcaption>
                                                    <h3>
                                                        {user.email}
                                                    </h3>
                                                </figure>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default MyAccountPage;
