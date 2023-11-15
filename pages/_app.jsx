import React, {useEffect} from "react";
import Head from "next/head";
import App from 'next/app';
import Script from 'next/script'
import Cookies from "js-cookie";

import { wrapper } from '~/store/store';
import { CookiesProvider } from 'react-cookie';
import MasterLayout from '~/components/layouts/MasterLayout';
import '~/public/static/fonts/Linearicons/Font/demo-files/demo.css';
import '~/public/static/fonts/font-awesome/css/font-awesome.min.css';
import '~/public/static/css/bootstrap.min.css';
import '~/public/static/css/slick.min.css';
import '~/scss/style.scss';
import '~/scss/home-default.scss';
import '~/scss/market-place-1.scss';
import '~/scss/market-place-2.scss';
import '~/scss/market-place-3.scss';
import '~/scss/market-place-4.scss';
import '~/scss/electronic.scss';
import '~/scss/furniture.scss';
import '~/scss/organic.scss';
import '~/scss/technology.scss';
import '~/scss/autopart.scss';
import '~/scss/electronic.scss';

import 'react-toastify/dist/ReactToastify.css';

import { Provider, useDispatch, useSelector } from "react-redux";
import { loadInitialData } from '~/functions/loadInitialData';
import { ToastContainer } from "react-toastify";
import AuthProvider from "~/context/auth";

function MyApp({ Component, ...rest }) {

    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    //const state         = useSelector((state) => state);
    //const dispatch      = useDispatch();
    //const loaded = state.app.loaded;

    
    useEffect(() => {
        const initialStore = store.getState();
        console.log('state', initialStore);
        const loading = initialStore.app.loading;

        // setCategories
        // dispatch(setCategories());
        // loadInitialData(state, dispatch);
        

        if(!loading){
            console.log('app loaded');
            setTimeout(function () {
                document.getElementById('__next').classList.add('loaded');
            }, 100)
        }
    }, []);
    

    return (
        <>
            <Head>
                <title>RepuestosGo</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="format-detection" content="telephone=no" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="author" content="nouthemes" />
                <meta
                    name="keywords"
                    content="RepuestosGo"
                />
                <meta
                    name="description"
                    content="RepuestosGo"
                />
            </Head>
            <div>
                <Provider store={store}>
                    <CookiesProvider>
                        <AuthProvider>
                            <MasterLayout>
                                <ToastContainer />
                                <Component {...pageProps} />
                            </MasterLayout>
                        </AuthProvider>
                    </CookiesProvider>
                </Provider>
            </div>
        </>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async (appContext) => {
    await loadInitialData(store, appContext.ctx.req);
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
});

export default MyApp;
