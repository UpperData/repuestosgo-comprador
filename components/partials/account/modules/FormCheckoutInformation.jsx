import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
    }

    handleLoginSubmit = () => {
        Router.push('/account/shipping');
    };

    render() {
        return (
            <Form
                className="ps-form__billing-info"
                onFinish={this.handleLoginSubmit}>
                <h3 className="ps-form__heading">Información de contacto</h3>
                <div className="form-group">
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: false,
                                message:  'Debe ingresar su correo electrónico',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                        />
                    </Form.Item>
                </div>
                <h3 className="ps-form__heading">Dirección</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter your first name!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter your last name!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: false,
                                message: 'Enter an address!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Address"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="apartment"
                        rules={[
                            {
                                required: false,
                                message: 'Enter an Apartment!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Apartment, suite, etc. (optional)"
                        />
                    </Form.Item>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter a city!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="city"
                                    placeholder="City"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="postalCode"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter a postal oce!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="postalCode"
                                    placeholder="Postal Code"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="ps-checkbox">
                        <input
                            className="form-control"
                            type="checkbox"
                            id="save-information"
                        />
                        <label htmlFor="save-information">
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
            </Form>
        );
    }
}

export default FormCheckoutInformation;
