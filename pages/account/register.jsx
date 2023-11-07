import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Register from '~/components/partials/account/Register';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const RegisterPage = () => {
    const breadCrumb = [
        {
            text: 'Inicio',
            url: '/',
        },
        {
            text: 'Registro',
        },
    ];

    return (
        <>
            <PageContainer 
                header={<div></div>}
                footer={<div></div>} 
                title="Registro"
            >
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Register />
                </div>
                {/* 
                    <Newletters layout="container" />
                */}
            </PageContainer>
        </>
    );
};

export default RegisterPage;
