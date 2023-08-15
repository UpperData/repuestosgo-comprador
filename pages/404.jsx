import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
    return (
        <div className="site-content">
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        <figure>
                            <img src="/static/img/404.jpg" alt="" />
                            <h3>La página que buscas no ha sido encontrada</h3>
                            <p>
                                Vuelva al 
                                <Link href="/">
                                    <a> Inicio</a>
                                </Link>
                            </p>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;
