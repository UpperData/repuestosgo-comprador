import React, { useState } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';

import axios from '../../../services/fetch';

import { toast } from 'react-toastify';
import { useAuth } from '~/context/auth';

function Login () {

    const auth    = useAuth();

    const [sending, setsending] = useState(false);
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState({
        email:          "", 
        pass:           "",   
        remember:       false
    });
    const [errors, seterrors] = useState({});

    const router = useRouter();

    const changeInputValue = (e, flag) => {
        const {value} = e.target;
        setdata({
            ...data,
            [flag]: value
        });
    }

    const changeCheck = (e, flag) => {
        const ischecked = e.target.checked;
        setdata({
            ...data,
            [flag]: ischecked
        });
    }

    const handleLoginSubmit = (e) => {

        e.preventDefault();

        let countErrors = 0;
        let dataErrors  = {};

        seterrors({});
        setsending(false);

        if(data.email.trim() === ''){
            dataErrors.email = 'Ingrese un email';
            countErrors++;
        }

        if(data.pass.trim() === ''){
            dataErrors.pass = 'Ingrese una contraseña';
            countErrors++;
        }

        if(countErrors > 0){

            toast.error('No se ha podido enviar la solicitud, revise los datos del formulario');
            seterrors(dataErrors);
            console.log('error');

        }else{

            setsending(true);
            const url = "/loGin/byUSErpAss";
            let dataToSend = {
                nick:   data.email, 
                pass:   data.pass,     
            };

            axios.post(url, dataToSend).then((res) => {
                // console.log(data);
                // console.log(res.data);

                setsending(false);

                let loginData = res.data;
                if(loginData.result){
                    const token = loginData.token;
                    delete loginData.token;
                    
                    auth.setUser(token, loginData);
                    toast.success('Ha iniciado sesión');
                    router.push('/');
                }else{
                    //err
                }

            }).catch((err) => {
                console.error(err);
            });
            

        }
    };

    return (
        <div className="ps-my-account">
            <div className="container">
                <div className='py-4'>
                    <Link href="/">
                        <img 
                            src="/static/img/logo/logo-b.png" 
                            style={{maxWidth: 250}}
                            alt="" 
                        />
                    </Link>
                </div>
                <form
                    className="ps-form--account"
                    onSubmit={(e) => handleLoginSubmit(e)}
                >
                    <ul className="ps-tab-list">
                        <li className="active">
                            <Link href="/account/login">
                                <a>Iniciar sesión</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/account/register">
                                <a>Registro</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="sign-in">
                        <div className="ps-form__content">
                            <h5>
                                Iniciar sesión
                            </h5>
                            <div
                                className={(errors.email ? 'has-error' : '') + ' form-group'}
                            >
                                <input 
                                    type="text" 
                                    className="form-control ant-input" 
                                    placeholder='Email'
                                    onChange={(e) => changeInputValue(e, 'email')}
                                />
                                {errors.email &&
                                    <p className='mb-2 text-error'>
                                        {errors.email}
                                    </p>
                                }
                            </div>
                            <div
                                className={(errors.pass ? 'has-error' : '') + ' form-group'}
                            >
                                <input 
                                    type="password" 
                                    className="form-control ant-input" 
                                    placeholder='Contraseña'
                                    onChange={(e) => changeInputValue(e, 'pass')}
                                />
                                {errors.pass &&
                                    <p className='mb-2 text-error'>
                                        {errors.pass}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <div className="ps-checkbox">
                                    <input
                                        className="form-control"
                                        type="checkbox"
                                        id="remember-me"
                                        name="remember-me"
                                        checked={data.remember}
                                        onChange={(e) => changeCheck(e, 'remember')}
                                    />
                                    <label htmlFor="remember-me">
                                        Recuerdame
                                    </label>
                                </div>
                            </div>
                            <div className="form-group submit pb-5">
                                <button
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth text-white"
                                    disabled={sending}
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </div>
                        <div className="ps-form__footer d-none">
                            <p>Iniciar sesión con:</p>
                            <ul className="ps-list--social">
                                <li>
                                    <a
                                        className="facebook"
                                        href="#"
                                        onClick={e =>
                                            this.handleFeatureWillUpdate(e)
                                        }>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="google"
                                        href="#"
                                        onClick={e =>
                                            this.handleFeatureWillUpdate(e)
                                        }>
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                {/* 
                                <li>
                                    <a
                                        className="twitter"
                                        href="#"
                                        onClick={e =>
                                            this.handleFeatureWillUpdate(e)
                                        }>
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram"
                                        href="#"
                                        onClick={e =>
                                            this.handleFeatureWillUpdate(e)
                                        }>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                */}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
