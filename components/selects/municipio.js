import React, { useState } from 'react'
import axios from '../../services/fetch'
import { useEffect } from 'react';

function MunicipioSelect({ val = "", idsearch = null, error = null, id = 'item', onChange = () => console.log('change') }) {
    const placeholder = 'Seleccione un municipio';
    const [options, setoptions] = useState([]);
    const [loadingdata, setloadingdata] = useState(true);

    const getData = () => {

        const urlGetCiudades   = `/PROvInCES/VzlA/State/${idsearch}`;

        axios.get(urlGetCiudades).then((res) => {
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
        if(idsearch !== null && idsearch !== ""){
            onChange("");
            getData();
        }else{
            onChange("");
        }
    }, [idsearch]);

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

export default MunicipioSelect