import React from 'react';
import Link from 'next/link';

const ModulePaymentShipping = () => {
    return (
        <>
            <div className="ps-block__panel">
                <figure>
                    <small>Contacto</small>
                    <p>test@gmail.com</p>
                    <Link href="/account/checkout">
                        <a>Cambiar</a>
                    </Link>
                </figure>
                <figure>
                    <small>Enviar a</small>
                    <p>2015 South Street, Midland, Texas</p>
                    <Link href="/account/checkout">
                        <a>Cambiar</a>
                    </Link>
                </figure>
            </div>
            <h4>Método de envío</h4>
            <div className="ps-block__panel">
                <figure>
                    <small>Envío internacional</small>
                    <strong>$20.00</strong>
                </figure>
            </div>
        </>
    );
};

export default ModulePaymentShipping;
