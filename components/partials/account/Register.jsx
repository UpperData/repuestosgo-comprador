import React, { useState } from 'react';
import Link from 'next/link';

import Router, { useRouter } from 'next/router';

import { Form, Input, Select } from 'antd';
import { connect } from 'react-redux';

import axios from '../../../services/fetch';
import { toast } from 'react-toastify';

function Register(){

    const router = useRouter();
    const [sending, setsending] = useState(false);
    const [loading, setloading] = useState(false);

    const [data, setdata] = useState({
        email:          "", 
        // pass:           "",   
        repeatPassword: "",  
        firstName:      "", 
        nationality:    "",
    });

    const [errors, seterrors] = useState({});

    const changeInputValue = (e, flag) => {
        const {value} = e.target;
        setdata({
            ...data,
            [flag]: value
        });
    }

    const sendData = (e) => {
        e.preventDefault();

        let countErrors = 0;
        let dataErrors  = {};

        seterrors({});
        setsending(false);

        if(data.firstName.trim() === ''){
            dataErrors.firstName = 'Ingrese su nombre';
            countErrors++;
        }

        if(data.email.trim() === ''){
            dataErrors.email = 'Ingrese un email';
            countErrors++;
        }

        /*
        if(data.pass.trim() === ''){
            dataErrors.pass = 'Ingrese una contraseña';
            countErrors++;
        }

        if(data.repeatPassword.trim() === ''){
            dataErrors.repeatPassword = 'Repita su contraseña';
            countErrors++;
        }else if(data.repeatPassword.trim() !== data.pass.trim()){
            dataErrors.repeatPassword = 'Las contraseñas deben coincidir';
            countErrors++;
        }
        */

        if(data.nationality.trim() === ''){
            dataErrors.nationality = 'Seleccione una nacionalidad';
            countErrors++;
        }

        if(countErrors > 0){
            toast.error('No se ha podido enviar la solicitud, revise los datos del formulario');
            seterrors(dataErrors);
            console.log('error');
        }else{
            setsending(true);

            let dataToSend = {
                email:  data.email, 
                // pass:   data.pass,     
                people:{ 
                    docNumber:  "", 
                    firstName:  data.firstName, 
                    lastName:   "", 
                    gender:     "",
                    isFamele:   "",
                    isNacional: data.nationality === 'V' ? true : false, 
                } 
            };
            console.log(dataToSend);

            axios.post('/accOunT/regisTER/buyer', dataToSend).then((res) => {
                
                setsending(false);
                router.push('/account-result');
                toast.success('¡Su cuenta ha sido creada satisfactoriamente!');
                console.log('cuenta creada');
                console.log(res.data);
                
            }).catch((err) => {
                setsending(false);
                console.error(err);
            });
        
        }
    }

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
                    onSubmit={(e) => sendData(e)}
                >
                    
                        <ul className="ps-tab-list">
                            <li>
                                <Link href="/account/login">
                                    <a>Iniciar sesión</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="/account/register">
                                    <a>Registro</a>
                                </Link>
                            </li>
                        </ul>
                    
                    <div className="ps-tab active pb-3" id="register">
                        <div className="ps-form__content">
                            <h5>Crear una cuenta</h5>
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
                                className={(errors.firstName ? 'has-error' : '') + ' form-group'}
                            >
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder='Nombre'
                                    onChange={(e) => changeInputValue(e, 'firstName')}
                                />
                                {errors.firstName &&
                                    <p className='mb-2 text-error'>
                                        {errors.firstName}
                                    </p>
                                }
                            </div>
                            <div 
                                className={(errors.nationality ? 'has-error' : '') + ' form-group'}
                            >
                                <select 
                                    className="form-control"
                                    onChange={(e) => changeInputValue(e, 'nationality')}
                                >
                                    <option value="">Nacionalidad</option>
                                    <option value="V">Venezolana</option>
                                    <option value="E">Extranjera</option>
                                </select>
                                {errors.nationality &&
                                    <p className='mb-2 text-error'>
                                        {errors.nationality}
                                    </p>
                                }
                            </div>
                            {/* 
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
                            <div
                                className={(errors.repeatPassword ? 'has-error' : '') + ' form-group'}
                            >
                                <input 
                                    type="password" 
                                    className="form-control ant-input" 
                                    placeholder='Repetir contraseña'
                                    onChange={(e) => changeInputValue(e, 'repeatPassword')}
                                />
                                {errors.repeatPassword &&
                                    <p className='mb-2 text-error'>
                                        {errors.repeatPassword}
                                    </p>
                                }
                            </div>
                            */}
                            <div className="form-group submit">
                                <button
                                    disabled={sending}
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth text-white"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                        <div className="ps-form__footer d-none">

                            <p>Iniciar sesión con:</p>

                            <ul className="ps-list--social">
                                <li>
                                    <a className="facebook" href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="google" href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                {/* 
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
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

export default Register;
