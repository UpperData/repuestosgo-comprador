import React from 'react';
import Link from 'next/link';

const FooterSecond = ({ classes }) => (
    <footer className={`ps-footer ps-footer--2 ${classes}`}>
        <div className="container">
            <div className="ps-footer__content">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <aside className="widget widget_footer">
                                    <h4 className="widget-title">
                                        Legal
                                    </h4>
                                    <ul className="ps-list--link">
                                        <li>
                                            <Link href="/page/blank">
                                                <a>Politica de privacidad</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page/blank">
                                                <a>Terminos y condiciones</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page/blank">
                                                <a>Reembolsos</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page/faqs">
                                                <a>FAQs</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <aside className="widget widget_footer">
                                    <h4 className="widget-title">RepuestosGo</h4>
                                    <ul className="ps-list--link">
                                        <li>
                                            <Link href="/page/about-us">
                                                <a>Sobre nosotros</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/product/affiliate">
                                                <a>Afiliar</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page/contact-us">
                                                <a>Contacto</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <aside className="widget widget_footer">
                                    <h4 className="widget-title">Tienda</h4>
                                    <ul className="ps-list--link">
                                        <li>
                                            <Link href="/account/login">
                                                <a>Mi cuenta</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Catálogo</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <aside className="widget widget_newletters">
                            <h4 className="widget-title">
                                Newsletter
                            </h4>
                            <form
                                className="ps-form--newletter"
                                action="#"
                                method="get">
                                <div className="form-group--nest">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email"
                                    />
                                    <button className="ps-btn">
                                        Subscribir
                                    </button>
                                </div>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google-plus" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </form>
                        </aside>
                    </div>
                </div>
            </div>
            <div className="ps-footer__copyright">
                <p>&copy;2023 <strong>RepuestosGo</strong></p>
                <p>
                    <span>Soporte de pagos en:</span>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/1.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/2.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/3.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/4.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/5.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                </p>
            </div>
        </div>
    </footer>
);

export default FooterSecond;
