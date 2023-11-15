import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contáctanos</h4>
            <div className="widget_content">
                <p>Soporte técnico 24/7</p>
                <h3>+58 412-9502391</h3>
                <p>
                    Caracas, Venezuela <br />
                    <a href="mailto:contact@martfury.co">admin@repuestosgo.com</a>
                </p>
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
                        <a className="instagram" href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Acceso rápido</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>Política de privacidad</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/blank">
                        <a>Términos y condiciones</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Catálogo</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/faqs">
                        <a>Preguntas frecuentes</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Compañia</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>Acerca de</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Convertirse en afiliado</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/contact-us">
                        <a>Contacto</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/account/checkout">
                        <a>Carrito de compras</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>Mi cuenta</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
