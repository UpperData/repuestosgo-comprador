import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { carouselStandard } from '~/utilities/carousel-helpers';

import axios from '../../../../services/fetch';
import { getProducts } from '~/services/request/products';
import Product from '~/hooks/product';

const AutopartRecommendedForMe = () => {

    const [loading, setloading] = useState(true);
    const [products, setproducts] = useState([]);
    const [error, seterror] = useState(false);

    //const { productItems, loading, getProductsByCollection } = useGetProducts();

    const getData = () => {
        axios.get(getProducts('1')).then((res) => {
            const resdata = res.data;
            if(resdata.result){
                let list = resdata.data.rows;
                const len = list.length;
                if(len > 0){
                    console.log(list);
                    if(len > 1){
                        setproducts(list);
                    }else{
                        setproducts(list.concat(list, list, list, list, list));
                    }
                }
               

                setTimeout(() => {
                    setloading(false);
                }, 100);
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    useEffect(() => {
        if(loading){
            getData();
        }
    }, []);

    let productItemsView;
    if (!loading) {
        if (products.length > 0) {
            console.log('init');
            const slideItems = products.map((item, key) => (
                <div key={key}>
                    <Product product={item} />
                </div>
            ));

            
            productItemsView = (
                <Slider
                    {...carouselStandard}
                    arrows={false}
                    className="ps-carousel outside"
                    onInit={(e) => console.log(e)}
                >
                    {slideItems}
                </Slider>
            );
            
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        const skeletons = generateTempArray(6).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    if(!error){
        return (
            <section className="ps-product-list ps-recommend-for-you">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Recomendado para tí</h3>
                        {/* 
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Más vendidos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Publicado recientemente</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Mejor calificado</a>
                                </Link>
                            </li>
                        </ul>
                        */}
                    </div>
                    <div className="ps-section__content">{productItemsView}</div>
                </div>
            </section>
        );
    }else{
        return (
            <>
            </>
        )
    }
};

export default AutopartRecommendedForMe;
