import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Checkout from '~/components/partials/account/Checkout';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';

const CheckoutPage = () => {
    const breadCrumb = [
        {
            text: 'Inicio',
            url: '/',
        },
        {
            text: 'Carrito de compras',
            url: '/account/shopping-cart',
        },
        {
            text: 'Información de pago',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Checkout">
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Checkout />
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default CheckoutPage;
