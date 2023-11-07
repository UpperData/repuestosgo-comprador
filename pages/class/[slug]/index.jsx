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
import { UseProduct } from '~/hooks/product';
import { useSelector } from 'react-redux';
import WidgetShopCategoriesByClass from '~/components/shared/widgets/WidgetShopCategoriesByClass';

const ProductCategoryScreen = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    //const [category, setCategory] = useState(null);
    // const [loading, setLoading] = useState(false);

    const app = useSelector((state) => state.app);
    const categories = useSelector((state) => state.app.categories);
    const [category, setcategory] = useState(null);
    const { products, loading, getProductsByClass, total } = UseProduct();

    async function getData() {
        if (slug) {

            console.log(Router.query);
            console.log(categories);

            const thisCategory = categories.find((item) => item.url === slug);
            setcategory(thisCategory);
            getProductsByClass(thisCategory.id);


        } else {
            console.log('Non data slug');
            // await Router.push('/shop');
        }
    }

    useEffect(() => {
        if(Router.isReady && !app.loading){
            console.log(Router);
            console.log('Search products by class: '+slug);
            getData();
        }
    }, [slug, Router, app.loading]);

    const breadCrumb = [
        {
            text: 'Inicio',
            url: '/',
        },
        {
            text: 'Catálogo',
            url: '/',
        },
        {
            text: category ? category.name : 'Product category',
        },
    ];

    //Views
    let productItemsViews;

    if (!loading) {
        if (category && products.length > 0) {
            productItemsViews = (
                <ProductItems 
                    columns={4} 
                    products={products} 
                />
            );
        } else {
            productItemsViews = <p>No se han encontrado resultados</p>;
        }
    } else {
        productItemsViews = <p>Cargando...</p>;
    }

    return (
        <PageContainer
            footer={<FooterDefault />}
            title={category ? category.name : 'Category'}
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
                                {category && category.name}
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
