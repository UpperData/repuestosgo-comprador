import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Login from '~/components/partials/account/Login';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Inicio',
            url: '/',
        },
        {
            text: 'Iniciar sesión',
        },
    ];
    return (
        <>
            <PageContainer 
                header={<></>}
                footer={<></>} 
                title="Login"
            >
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Login />
                </div>
                {/* 
                    <Newletters layout="container" />
                */}
            </PageContainer>
        </>
    );
};

export default LoginPage;
