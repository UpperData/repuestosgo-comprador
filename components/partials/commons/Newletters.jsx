import React from 'react';

const Newsletters = ({ layout }) => (
    <section className="ps-newsletter">
        <div className={layout && layout === 'container' ? ' container' : 'ps-container'}>
            <form className="ps-form--newsletter" action="do_action" method="post">
                <div className="row">
                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-form__left">
                            <h3>Boletín informativo</h3>
                            <p>Suscribase a nuestro boletín para recibir información de ofertas y productos en RepuestosGo</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-form__right">
                            <div className="form-group--nest">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email"
                                />
                                <button className="ps-btn text-white">Suscribirse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
);

export default Newsletters;
