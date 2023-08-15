import React from 'react';

const SiteFeatures = () => (
    <section className="ps-site-features">
        <div className="container">
            <div className="ps-block--site-features ps-block--site-features-2">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-rocket"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Servicio de delivery</h4>
                        <p>Para todo el país</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-sync"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Devoluciónes</h4>
                        <p>En repuestos con defectos</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-credit-card"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Pago seguro</h4>
                        <p>En todas sus compras</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-bubbles"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Soporte 24/7</h4>
                        <p>Dispuestos a atenderte</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SiteFeatures;
