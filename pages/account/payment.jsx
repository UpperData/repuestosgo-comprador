import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Payment from '~/components/partials/account/Payment';
import { connect } from 'react-redux';

import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const PaymentPage = () => {
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
            text: 'Checkout Information',
            url: '/account/checkout',
        },
        {
            text: 'Pago',
        },
    ];

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Pago">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Payment />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default connect()(PaymentPage);
