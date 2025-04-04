import React from 'react';

import { connect } from 'react-redux';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Shipping from '~/components/partials/account/Shipping';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const ShippingPage = () => {
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
            url: '/account/checkout',
        },
        {
            text: 'Envío',
        },
    ];

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Envío">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Shipping />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default connect()(ShippingPage);
