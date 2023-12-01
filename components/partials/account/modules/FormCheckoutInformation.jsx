import React, { Component, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';
import { toast } from 'react-toastify';
import CitySelect from '~/components/selects/city';
import StateSelect from '~/components/selects/state';
import MunicipioSelect from '~/components/selects/municipio';
import ParroquiaSelect from '~/components/selects/parroquia';

const FormCheckoutInformation = () => {
     
    const [sending, setsending] = useState(false);
    const [loading, setloading] = useState(false);
    const [errors, seterrors] = useState({});

    const [data, setdata] = useState({
        email:      '',
        firstName:  '',
        lastName:   '',

        address:    '',
        department: '',

        state:      '',
        municipio:  '',
        city:       '',
        parroquia:  '',

        postalCode: '',
        saveInfo:   false
    });

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        let countErrors = 0;
        let dataErrors  = {};

        seterrors({});
        setsending(false);

        /*
        if(data.email.trim() === ''){
            dataErrors.email = 'Ingrese un email';
            countErrors++;
        }

        if(data.firstName.trim() === ''){
            dataErrors.firstName = 'Debe ingresar un nombre';
            countErrors++;
        }

        if(data.lastName.trim() === ''){
            dataErrors.lastName = 'Debe ingresar un apellido';
            countErrors++;
        }

        // =========================================

        if(data.address.trim() === ''){
            dataErrors.address = 'Ingrese su dirección';
            countErrors++;
        }

        if(data.department.trim() === ''){
            dataErrors.department = 'Dirección de departamento';
            countErrors++;
        }

        if(data.city.trim() === ''){
            dataErrors.city = 'Ciudad de residencia';
            countErrors++;
        }

        if(data.postalCode.trim() === ''){
            dataErrors.postalCode = 'Código postal';
            countErrors++;
        }

        if(countErrors > 0){
            toast.error('Debe completar la información de envío');
            seterrors(dataErrors);
            console.log('error');
        }else{
        */

            let saveInfo = data.saveInfo;
            Router.push('/account/shipping');

        //}
    };

    const changeInputValue = (e, flag) => {
        const {value} = e.target;
        setdata({
            ...data,
            [flag]: value
        });
    }

    const changeData = (value, flag) => {
        setdata((prevState) => ({
            ...prevState,
            [flag]: value
        }));
    }

    const changeCheck = (e, flag) => {
        const ischecked = e.target.checked;
        setdata({
            ...data,
            [flag]: ischecked
        });
    }

    console.log(data);

    return (
        <div
            className="ps-form__billing-info"
        >
            <h3 className="ps-form__heading">Información de contacto</h3>
            <form action="" onSubmit={(e) => handleLoginSubmit(e)}>
                <div className="form-group">
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
                    <div className="row">
                        <div className="col-sm-6">
                            <div
                                className={(errors.firstName ? 'has-error' : '') + ' form-group'}
                            >
                                <input 
                                    type="text" 
                                    className="form-control ant-input" 
                                    placeholder='Nombre'
                                    onChange={(e) => changeInputValue(e, 'firstName')}
                                />
                                {errors.firstName &&
                                    <p className='mb-2 text-error'>
                                        {errors.firstName}
                                    </p>
                                }
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div
                                className={(errors.lastName ? 'has-error' : '') + ' form-group'}
                            >
                                <input 
                                    type="text" 
                                    className="form-control ant-input" 
                                    placeholder='Apellido'
                                    onChange={(e) => changeInputValue(e, 'lastName')}
                                />
                                {errors.lastName &&
                                    <p className='mb-2 text-error'>
                                        {errors.lastName}
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="ps-form__heading">Dirección</h3>

                <div className="form-group">
                    <div
                        className={(errors.address ? 'has-error' : '') + ' form-group'}
                    >
                        <input 
                            type="text" 
                            className="form-control ant-input" 
                            placeholder='Dirección'
                            onChange={(e) => changeInputValue(e, 'address')}
                        />
                        {errors.address &&
                            <p className='mb-2 text-error'>
                                {errors.address}
                            </p>
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        {/* estado */}
                        <StateSelect 
                            error={errors.state} 
                            id='estado' 
                            val={data.state}
                            onChange={(val) => changeData(val, 'state')}
                        />
                    </div>
                    <div className="col-sm-6">
                        {/* ciudad */}
                        <CitySelect 
                            error={errors.city} 
                            id='ciudad' 
                            idsearch={data.state} 
                            val={data.city}
                            onChange={(val) => changeData(val, 'city')}
                        />
                    </div>
                    <div className="col-sm-6">
                        {/* municipio */}
                        <MunicipioSelect 
                            error={errors.municipio} 
                            id='municipio' 
                            idsearch={data.state} 
                            val={data.municipio}
                            onChange={(val) => changeData(val, 'municipio')}
                        />
                    </div>
                    <div className="col-sm-6">
                        {/* parroquia */}
                        <ParroquiaSelect 
                            error={errors.parroquia} 
                            id='parroquia' 
                            idsearch={data.municipio} 
                            val={data.parroquia}
                            onChange={(val) => changeData(val, 'parroquia')}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div
                            className={(errors.department ? 'has-error' : '') + ' form-group'}
                        >
                            <input 
                                type="text" 
                                className="form-control ant-input" 
                                placeholder='Departamento'
                                onChange={(e) => changeInputValue(e, 'department')}
                            />
                            {errors.department &&
                                <p className='mb-2 text-error'>
                                    {errors.department}
                                </p>
                            }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div
                            className={(errors.postalCode ? 'has-error' : '') + ' form-group'}
                        >
                            <input 
                                type="text" 
                                className="form-control ant-input" 
                                placeholder='Código postal'
                                onChange={(e) => changeInputValue(e, 'postalCode')}
                            />
                            {errors.postalCode &&
                                <p className='mb-2 text-error'>
                                    {errors.postalCode}
                                </p>
                            }
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="ps-checkbox">
                        <input
                            className="form-control"
                            type="checkbox"
                            id="save-info"
                            name="save-info"
                            checked={data.saveInfo}
                            onChange={(e) => changeCheck(e, 'saveInfo')}
                        />
                        <label htmlFor="save-info">
                            Deseo guardar esta información.
                        </label>
                    </div>
                </div>
                <div className="ps-form__submit">
                    <Link href="/account/cart">
                        <a>
                            <i className="icon-arrow-left mr-2"></i>
                            Regresar al carrito de compras
                        </a>
                    </Link>
                    <div className="ps-block__footer">
                        <button className="ps-btn text-white">
                            Continuar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormCheckoutInformation;
