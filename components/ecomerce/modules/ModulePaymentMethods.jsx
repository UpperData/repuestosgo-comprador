import React, { useState } from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';
import PaymentForm from '~/components/payment/form';

const ModulePaymentMethods = () => {
    const Router = useRouter();
    const [method, setMethod] = useState('zelle');

    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push('/account/payment-success');
    }

    return (
        <>
            <h4>Payment Methods</h4>
            <div className="ps-block--payment-method">
                <div className="ps-block__header">
                    <Radio.Group
                        onChange={(e) => handleChangeMethod(e)}
                        value={method}>
                        <Radio value={'zelle'}>Zelle</Radio>
                        <Radio value={'transferencia'}>Transferencia</Radio>
                        <Radio value={'pagomovil'}>Pago Movil</Radio>
                        <Radio value={'banesco'}>Banesco</Radio>
                    </Radio.Group>
                </div>
                <div className="ps-block__content">
                    {method === 'zelle' && 
                        <PaymentForm 
                            withEmail 
                            dataPayment={
                                <>
                                    <h3>
                                        Correo zelle:
                                    </h3>
                                    <p>
                                        fullshopingmg@gmail.com
                                    </p>
                                </>
                            } 
                        />
                    }
                    
                    {method === 'transferencia' && 
                        <div className="ps-block__tab">
                            <PaymentForm 
                                dataPayment={
                                    <>
                                        <h3>
                                            REPUESTO GO.COM, CA:
                                        </h3>
                                        <p>
                                            0134-0361-92-3611035305
                                        </p>
                                        <p>
                                            J-504124117
                                        </p>
                                        <p>
                                            BANESCO
                                        </p>
                                    </>
                                } 
                            />
                        </div>
                    }

                    {method === 'pagomovil' && 
                        <div className="ps-block__tab">
                            <PaymentForm 
                                dataPayment={
                                    <>
                                        <h3>
                                            PAGO MÓVIL:
                                        </h3>
                                        <p>
                                            Banesco (0134)
                                        </p>
                                        <p>
                                            J-504124117
                                        </p>
                                        <p>
                                            0424-360-52-54
                                        </p>
                                    </>
                                } 
                            />
                        </div>
                    }

                    {method === 'transferencia' && 
                        <div className="ps-block__tab">
                            
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default ModulePaymentMethods;
