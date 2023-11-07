import React from 'react';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy;  {new Date().getFullYear()} RepuestosGo &copy; Todos los derechos reservados</p>
        <p>
            <span>Aceptamos pagos por:</span>
            <a href="#">
                <img src="/static/img/payment-method/1.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/2.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/3.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/4.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/5.jpg" alt="Martfury" />
            </a>
        </p>
    </div>
);

export default FooterCopyright;
