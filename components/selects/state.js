import React, { useState } from 'react'
import axios from '../../services/fetch'
import { useEffect } from 'react';

function StateSelect({ val = "", error = null, id = 'item', onChange = () => console.log('change') }) {
    const placeholder = 'Seleccione un estado';
    const [options, setoptions] = useState([]);
    const [loadingdata, setloadingdata] = useState(true);

    const getData = () => {

        const urlGetEstados = "/StaTES/VZLA/gET/*";

        axios.get(urlGetEstados).then((res) => {
            //console.log(res.data);
            if(res.data.result){
                const data = res.data.data;
                setoptions(data);
            }

            setloadingdata(false);
        }).catch((err) => {
            console.error(err);
        });
    }

    useEffect(() => {
        if(loadingdata){
            getData();
            onChange("");
        }
    }, []);

    const changeSelect = (value) => {
        if(value){
            onChange(value);
        }else{
            onChange(value);
        }
    }

    return (
        <div className={(error ? 'has-error' : '') + ' form-group'}>
            <select 
                className='form-control' 
                name={`select-data-${id}`} 
                id={`select-data-${id}`}
                onChange={(e) => changeSelect(e.target.value)}
                value={val}
            >
                <option value="">{placeholder}</option>
                {options.length > 0 && options.map((item, key) => {
                    return <option key={key} value={item.id}>
                        {item.name}
                    </option>
                })}
            </select>
            {error &&
                <p className='mb-2 text-error'>
                    {errors}
                </p>
            }
        </div>
    );
}

export default StateSelect