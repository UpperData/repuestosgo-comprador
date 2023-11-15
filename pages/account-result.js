import React, { useState } from 'react';
import Link from 'next/link';

function AccountResult() {
    return (
        <div className="ps-my-account">
            <div className="container">
                <div className='py-4'>
                    <Link href="/">
                        <img 
                            src="/static/img/logo/logo-b.png" 
                            style={{maxWidth: 250}}
                            alt="" 
                        />
                    </Link>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-7 pt-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body py-5">
                                <h3 
                                    className='text-center fw-bold mb-4' 
                                    style={{ fontSize: '2em' }}
                                >
                                    ¡Registro realizado exitosamente!
                                </h3>
                                <div className="text-center">
                                    <p className='h3 mb-4 mx-auto'>
                                        Se le ha enviado un correo electrónico con los datos necesarios para iniciar sesión, bienvenido a RepuestosGo.
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <Link href={`/account/login`}>
                                        <span  className='ps-btn text-white'>
                                            Iniciar sesión
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountResult