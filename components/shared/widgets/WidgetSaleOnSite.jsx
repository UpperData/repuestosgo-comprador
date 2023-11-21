import React from 'react';
import Link from 'next/link';

const WidgetSaleOnSite = () => {
    return (
        <aside className="widget widget_sell-on-site">
            <p>
                <i className="icon-store"></i> ¿Quieres vender en RepuestosGo?
                <Link href="/account/register">
                    <a> ¡Registrate ahora!</a>
                </Link>
            </p>
        </aside>
    );
};

export default WidgetSaleOnSite;
