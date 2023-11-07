import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import ProductRepository from '~/repositories/ProductRepository';
import { useRouter } from 'next/router';
import ProductItems from '~/components/partials/product/ProductItems';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import WidgetShopCategoriesByClass from '~/components/shared/widgets/WidgetShopCategoriesByClass';
import { UseProduct } from '~/hooks/product';
import { useSelector } from 'react-redux';

const ProductCategoryScreen = () => {
    const Router = useRouter();
    const { slug, category } = Router.query;

    const app = useSelector((state) => state.app);
    const categories = useSelector((state) => state.app.categories);

    const [productClass, setproductClass] = useState(null);
    const [productCategory, setproductCategory] = useState(null);
    
    // const [loading, setLoading] = useState(false);
    const { products, loading, getProductsByCategory, total } = UseProduct();

    async function getData() {
        if (slug) {
            console.log(Router.query);
            console.log(categories);

            const thisClass = await categories.find((item) => item.url === slug);
            setproductClass(thisClass);
            console.log('class:', thisClass);
            const thisCategory = thisClass.subCategories.find((item) => item.url === category);

            setproductCategory(thisCategory);
            getProductsByCategory(thisCategory.id);

        } else {
            console.log('Non data slug');
            // await Router.push('/shop');
        }
    }

    useEffect(() => {
        if(Router.isReady && !app.loading){
            console.log(Router);
            console.log('Search products by category: '+slug);
            getData();
        }
    }, [slug, Router, app.loading]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/',
        },
        {
            text: productClass ? productClass.name : 'Product class',
        },
        {
            text: productCategory ? productCategory.name : 'Product category',
        },
    ];

    //Views
    let productItemsViews;

    if (!loading) {
        if (productCategory && products.length > 0) {
            productItemsViews = (
                <ProductItems 
                    columns={4} 
                    products={products} 
                />
            );
        } else {
            productItemsViews = <p>No Product found</p>;
        }
    } else {
        productItemsViews = <p>Loading...</p>;
    }

    return (
        <PageContainer
            footer={<FooterDefault />}
            title={productCategory ? productCategory.name : 'Category'}
            boxed={true}>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <div className="ps-layout--shop ps-shop--category">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopCategoriesByClass />
                            {/* 
                            <WidgetShopBrands />
                            <WidgetShopFilterByPriceRange />
                            */}
                        </div>
                        <div className="ps-layout__right">
                            <h3 className="ps-shop__heading">
                                {productCategory && productCategory.name}
                            </h3>
                            {productItemsViews}
                        </div>
                    </div>
                </div>
            </div>
            {/* 
            <Newletters layout="container" />
            */}
        </PageContainer>
    );
};
export default ProductCategoryScreen;
