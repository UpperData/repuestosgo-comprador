import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../services/fetch';
import { updateShopCart } from '~/store/shop/action';

export default function useShop() {

    const [cookies, setCookie] = useCookies(['shop-cart']);
    const shopCart = useSelector((state) => state.shop.cart);

    //const [cartItemsOnCookie] = useState(null);

    const dispatch = useDispatch();
    
    //const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);

    const getDataProductsinCart = async (items) => {
        setLoading(true);
        
        let queryString = '';

        let cartItems = items;
        if(!items){
            cartItems = cookies['shop-cart'] ? cookies['shop-cart'] : [];
        }

        cartItems.forEach(item => {
            if(queryString !== ''){
                queryString += '&';
            }

            queryString += `qs=${item.id}`;
        });

        // console.log(queryString);
        
        axios.get(`/INVETORY/articles/there?${queryString}`).then((res) => {
            const result = res.data.result;
            
            let itemsInCart = [];

            if(result && res.data.data.length > 0){
                res.data.data.forEach(product => {

                    console.log(product);
                    const productid      = product.articleId;
                    let cartItemProduct  = cartItems.find((item) => item.id === productid);
                    cartItemProduct.data = product;
                    itemsInCart.push(cartItemProduct);
                    
                });
            }

            console.log(itemsInCart);
            dispatch(updateShopCart(itemsInCart));

        }).catch((err) => {
            console.error(err);
        });
        
    }

    return {
        loading,
        products: shopCart,
        getProducts: getDataProductsinCart,
        increaseQty: () => {
            
        },
        decreaseQty: () => {

        },
        addItemToCart: async (newItem) => {
            // console.log('Cart items:', shopCart);
            // console.log('Cart cookie', cookies['shop-cart']);
            // console.log('Add Item', newItem);

            let cartItems = cookies['shop-cart'] ? cookies['shop-cart'] : [];
            let newCartItems = cartItems.filter((item) => item.id !== newItem.id);
            newCartItems.push(newItem);

            console.log('items, after add', newCartItems);
            await setCookie('shop-cart', JSON.stringify(newCartItems));

            setTimeout(() => {
                getDataProductsinCart(newCartItems); 
            }, 20);
        },
        removeItem: async (itemId) => {
            let cartItems = cookies['shop-cart'] ? cookies['shop-cart'] : [];
            let newCartItems = cartItems.filter((item) => item.id !== itemId);

            console.log('items, after remove', newCartItems);
            await setCookie('shop-cart', JSON.stringify(newCartItems));

            setTimeout(() => {
                getDataProductsinCart(newCartItems); 
            }, 20);
        },
        removeItems: (group) => {
            
        },
    };
}
