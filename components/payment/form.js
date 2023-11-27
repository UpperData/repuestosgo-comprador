import React, { useState } from 'react'

function PaymentForm({ withEmail = false, dataPayment = <span></span> }) {

    const [errors, seterrors] = useState({});
    const [data, setdata] = useState({
        nombre: '',
        cedula: '',
        fecha:  '',
        banco:  '',

        ref:    '',
        monto:  '',

        email:  ''
    });

    return (
        <div className="ps-block__tab">
            <div>
                {dataPayment}
            </div>
            <hr />
            <div className='pt-3'></div>
            {withEmail &&
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
            }
            <div className="row">
                <div className="col-lg-6">
                    <div
                        className={(errors.nombre ? 'has-error' : '') + ' form-group'}
                    >
                        <input 
                            type="text" 
                            className="form-control ant-input" 
                            placeholder='Nombre'
                            onChange={(e) => changeInputValue(e, 'nombre')}
                        />
                        {errors.nombre &&
                            <p className='mb-2 text-error'>
                                {errors.nombre}
                            </p>
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                        className={(errors.cedula ? 'has-error' : '') + ' form-group'}
                    >
                        <input 
                            type="text" 
                            className="form-control ant-input" 
                            placeholder='Cédula'
                            onChange={(e) => changeInputValue(e, 'cedula')}
                        />
                        {errors.cedula &&
                            <p className='mb-2 text-error'>
                                {errors.cedula}
                            </p>
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div
                        className={(errors.banco ? 'has-error' : '') + ' form-group'}
                    >
                        <input 
                            type="text" 
                            className="form-control ant-input" 
                            placeholder='Banco'
                            onChange={(e) => changeInputValue(e, 'banco')}
                        />
                        {errors.banco &&
                            <p className='mb-2 text-error'>
                                {errors.banco}
                            </p>
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                        className={(errors.fecha ? 'has-error' : '') + ' form-group'}
                    >
                        <input 
                            type="text" 
                            className="form-control ant-input" 
                            placeholder='Fecha de pago'
                            onChange={(e) => changeInputValue(e, 'fecha')}
                        />
                        {errors.fecha &&
                            <p className='mb-2 text-error'>
                                {errors.fecha}
                            </p>
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                        className={(errors.ref ? 'has-error' : '') + ' form-group'}
                    >
                        <input 
                            type="text" 
                            className="form-control ant-input" 
                            placeholder='Num. Voucher'
                            onChange={(e) => changeInputValue(e, 'ref')}
                        />
                        {errors.ref &&
                            <p className='mb-2 text-error'>
                                {errors.ref}
                            </p>
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                        className={(errors.monto ? 'has-error' : '') + ' form-group'}
                    >
                        <input 
                            type="text" 
                            className="form-control ant-input" 
                            placeholder='Monto'
                            onChange={(e) => changeInputValue(e, 'monto')}
                        />
                        {errors.monto &&
                            <p className='mb-2 text-error'>
                                {errors.monto}
                            </p>
                        }
                    </div>
                </div>
            </div>
            <div className="form-group">
                <button
                    className="ps-btn ps-btn--fullwidth text-white"
                    // onClick={(e) => handleSubmit(e)}
                >
                    Confirmar pago
                </button>
            </div>
        </div>
    )
}

export default PaymentForm