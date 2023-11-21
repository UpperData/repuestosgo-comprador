import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import HeaderAutoPart from '~/components/shared/headers/HeaderAutoPart';
import { wrapper } from '~/store/store';

import axios from '../../services/fetch';
import SellerProducts from '~/components/partials/product/SellerProducts';

const ProductDefaultPage = (props) => {

    const router = useRouter();
    const { pid } = props;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    console.log('productData', props);
    const [dataProduct, setdataProduct] = useState(props.productData);

    useEffect(() => {
        if(dataProduct !== props.productData){
            setdataProduct(props.productData);
        }
    }, [pid]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: dataProduct ? dataProduct.description : 'Loading...',
        },
    ];
    // Views
    let productView, headerView;
    if (!loading) {
        if (dataProduct) {
            productView = <ProductDetailFullwidth 
                product={product} 
                data={dataProduct} 
            />;
            headerView = (
                <>
                    {/* 
                        <HeaderProduct product={product} />
                    */}

                    <HeaderAutoPart product={product} />
                    <HeaderMobileProduct />
                </>
            );
        } else {
            headerView = (
                <>
                    <HeaderAutoPart />
                    <HeaderMobileProduct />
                </>
            );
        }
    } else {
        productView = <SkeletonProductDetail />;
    }

    return (
        <PageContainer
            header={headerView}
            title={dataProduct ? dataProduct.description : 'Loading...'}>
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" 
        />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">
                            {productView}
                        </div>
                        <div className="ps-page__right">
                            <ProductWidgets />
                        </div>
                    </div>

                    {props.otherArticles.length > 0 &&
                        <SellerProducts productItems={props.otherArticles} layout="fullwidth" collectionSlug="deal-of-the-day" />
                    }
                    
                    {/* 
                        <CustomerBought layout="fullwidth" collectionSlug="deal-of-the-day"/>
                        <RelatedProduct collectionSlug="shop-recommend-items" />
                    */}
                </div>
            </div>
            {/* 
                <Newletters />
            */}
        </PageContainer>
    );
};

ProductDefaultPage.getInitialProps = wrapper.getInitialPageProps((store) => async ({ req, query }) => {
    
    const state         = store.getState();
    const { pid }       = query;

    const data          = await axios.get(`/invetory/puBLIshING/gET/${pid}`);

    const dataProduct   = data.data.data;

    const idShop = dataProduct.article.storeId;
    const otherArticlesByShop = await axios.get(`/invetory/puBLIshING/seven/${idShop}`);

    return {
        pid,
        productData:    dataProduct,
        storeId:        dataProduct.article.storeId,
        otherArticles:  otherArticlesByShop.data.result ? otherArticlesByShop.data.data : [] 
    }
    
});

export default ProductDefaultPage;
