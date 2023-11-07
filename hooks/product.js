import { useState } from 'react';
import axios from '../services/fetch';
import { getProducts, getProductsByCat, getProductsByClass } from '~/services/request/products';

import Link from 'next/link';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import Rating from '~/components/elements/Rating';
import LazyLoad from 'react-lazyload';
import { formatCurrency } from '~/utilities/product-helper';

const Product = ({ product }) => {
    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <Link 
                    href={''}
                    //href="/product/[pid]" 
                    //as={`/product/${product.id}`}
                >
                    <a>
                        {product.photo && product.photo.MainPhoto &&
                            <LazyLoad>
                                <img
                                    src={product.photo.MainPhoto}
                                    alt={product.description}
                                />
                            </LazyLoad>
                        }
                    </a>
                </Link>
                { 
                    //badge(product)
                }
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <Link 
                    href={''}
                    //href="/shop"
                >
                    <a className="ps-product__vendor">Young Shop</a>
                </Link>
                <div className="ps-product__content">
                    <Link 
                        href={``} 
                        as={``}
                    >
                        <a className="ps-product__title">
                            {product.description}
                        </a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>02</span>
                    </div>
                    <p className="ps-product__price">
                        <span>$</span>
                        {formatCurrency(product.price)}
                    </p>
                </div>
                <div className="ps-product__content hover">
                    <Link 
                        href={``} 
                        as={``}
                    >
                        <a className="ps-product__title">
                            {product.description}
                        </a>
                    </Link>
                    <p className="ps-product__price">
                        <span>$</span>
                        {formatCurrency(product.price)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;

export function UseProduct() {
    
    const [loading,  setLoading]    = useState(false);
    const [products, setProducts]   = useState([]);
    const [product,  setProduct]    = useState(null);
    const [total, setTotal]         = useState(0);

    return {
        loading,
        products,
        product,
        total,
        setProducts: (payload) => {
            setProducts(payload);
        },

        setLoading: (payload) => {
            setLoading(payload);
        },

        getProductsByClass: async (idClass) => {
            setLoading(true);
            await axios.get(getProductsByClass(idClass)).then((res) => {
                const resdata = res.data;
                if(resdata.result){
                    let list = resdata.data.rows;
                    // const len = list.length;
                    console.log('products by class', list);
                    setProducts(list);
                    setTotal(list.length);
                    setLoading(false);
                }
            });
        },

        getProductsByCategory: async (idcat) => {
            setLoading(true);
            await axios.get(getProductsByCat(idcat)).then((res) => {
                const resdata = res.data;
                if(resdata.result){
                    let list = resdata.data.rows;
                    // const len = list.length;
                    console.log(list);
                    setProducts(list);
                    setTotal(list.length);
                    setLoading(false);
                }
            });
        },

        getProducts: async () => {
            setLoading(true);
            await axios.get(getProducts('1')).then((res) => {
                const resdata = res.data;
                if(resdata.result){
                    let list = resdata.data.rows;
                    const len = list.length;
                    if(len > 0){

                        console.log(list);

                        setProducts(list);
                        setTotal(list.length);

                    }
                    setLoading(false);
                }
            });
        },

        getProductById: async (payload) => {
            setLoading(true);
            /*
            const responseData = await ProductRepository.getProductsById(
                payload
            );
            if (responseData) {
                setProduct(responseData);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
            */
        },
    };
}
