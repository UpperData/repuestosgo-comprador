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

    console.log('USER', user);

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
                                        <div className="card-body py-5">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="content-profile-photo">
                                                        <i className='fa fa-user color fa-5x'></i>    
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">

                                                    <div className="ps-widget__header">
                                                        {/* 
                                                            <img src="/static/img/users/3.jpg" />
                                                        */}
                                                        
                                                        <figure>
                                                            <figcaption>
                                                                {`${user.people.firstName} ${user.people.lastName}`}
                                                                {user.isConfirmed &&
                                                                    <i className="fa fa-check-circle ml-2 text-success"></i>
                                                                }
                                                            </figcaption>
                                                            <h3>
                                                                {user.email}
                                                            </h3>
                                                            <figcaption>
                                                                {user.people.document.nationality === 'v' ? 'Venezolano' : 'Extranjero'}
                                                            </figcaption>
                                                        </figure>
                                                        
                                                    </div>
                                                    <hr />
                                                    <h4 className='font-weight-normal'>
                                                        Datos personales
                                                    </h4>

                                                    <div className="row mb-3">
                                                        <div className="col-lg-6 mb-3">
                                                            <label htmlFor="">
                                                                Nombre
                                                            </label>
                                                            <input 
                                                                readOnly
                                                                type="text" 
                                                                className='form-control'
                                                                value={user.people.firstName}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 mb-3">
                                                            <label htmlFor="">
                                                                Apellido
                                                            </label>
                                                            <input 
                                                                readOnly
                                                                type="text" 
                                                                className='form-control'
                                                                value={user.people.lastName}
                                                            />
                                                        </div>
                                                    </div>

                                                    <h4 className='font-weight-normal'>
                                                        Identificación
                                                    </h4>
                                                    <div className="row">
                                                        <div className="col-lg-4 mb-3">
                                                            <label htmlFor="">
                                                                Género
                                                            </label>
                                                            <input 
                                                                readOnly
                                                                type="text" 
                                                                className='form-control'
                                                                value={user.people.document.gender === 'h' ? 'Hombre' : 'Mujer'}
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 mb-3">
                                                            <label htmlFor="">
                                                                Documento de identidad
                                                            </label>
                                                            <input 
                                                                readOnly
                                                                type="text" 
                                                                className='form-control'
                                                                value={user.people.document.number}
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 mb-3">
                                                            <label htmlFor="">
                                                                Estado civil
                                                            </label>
                                                            <input 
                                                                readOnly
                                                                type="text" 
                                                                className='form-control'
                                                                value={user.people.document.civil.name}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="text-right pt-4">
                                                        <button className="ps-btn text-white">
                                                            Editar perfil
                                                        </button>
                                                    </div>

                                                </div>
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
