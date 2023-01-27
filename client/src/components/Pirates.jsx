import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const Pirates = () => {
    
    const [pirates, setPirates] = useState(null);
    const [flag, setFlag] =useState(false);

    useEffect( () => {
        const controller = new AbortController();
        axios.get('http://localhost:8000/api/pirates', { signal: controller.signal })
            .then( res => {
                setPirates(res.data);
            })
            .catch( err => console.log(err) );
        return () => controller.abort();
    }, [flag]);

    return (
        <div>
            <Outlet context={{ pirates, flag, setFlag }}/>
        </div>
    )
}

export default Pirates