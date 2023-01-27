import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OnePirate = () => {
    
    const { id } = useParams();
    const [pirate, setPirate] = useState(null);

    useEffect( () => {
        const controller = new AbortController();
        axios.get(`http://localhost:8000/api/pirates/${id}`, { signal: controller.signal })
            .then( res => {
                console.log(res);
                setPirate(res.data);
            })
            .catch( err => console.log(err) );
        return () => controller.abort();
    }, [id]);

    const handleClick = (e, bool) => {
        e.preventDefault();
        const { name } = e.target;
        setPirate({
            ...pirate,
            [name]: !bool,
        })
    }
    
    return (
        <div className='mb-3'>
            <h2 className='text-center'>Current Pirate</h2>
            {
                pirate &&
                <>
                    <div className='mb-3 d-flex justify-content-evenly'>
                        <div className="card-body">
                            <img src={ pirate.url } alt="pirate img" style={ { height:'300px' } } className='mb-3'/>
                            <h2>"{ pirate.catchPhrase }"</h2>
                        </div>
                        <div className="card-body">
                            <h4 className='text-center'>About</h4>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Position: </td>
                                        <td>{ pirate.position }</td>
                                    </tr>
                                    <tr>
                                        <td>Treasure: </td>
                                        <td>{ pirate.treasure }</td>
                                    </tr>
                                    <tr>
                                        <td>Peg Leg: </td>
                                        <td className='d-flex justify-content-evenly'>
                                            <span>{ pirate.leg ? "Yes" : "No" }</span>
                                            {
                                                pirate.leg ?
                                                <button className="btn btn-success" name='leg' onClick={ e => handleClick(e, pirate.leg) }>Yes</button> :
                                                <button className="btn btn-danger" name='leg' onClick={ e => handleClick(e, pirate.leg) }>No</button>
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Eye Patch: </td>
                                        <td className='d-flex justify-content-evenly'>
                                            <span>{ pirate.eye ? "Yes" : "No" }</span>
                                            {
                                                pirate.eye ?
                                                <button className="btn btn-success" name='eye' onClick={ e => handleClick(e, pirate.eye) }>Yes</button> :
                                                <button className="btn btn-danger" name='eye' onClick={ e => handleClick(e, pirate.eye) }>No</button>
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hook Hand: </td>
                                        <td className='d-flex justify-content-evenly'>
                                            <span>{ pirate.hand ? "Yes" : "No" }</span>
                                            {
                                                pirate.hand ?
                                                <button className="btn btn-success" name='hand' onClick={ e => handleClick(e, pirate.hand) }>Yes</button> :
                                                <button className="btn btn-danger" name='hand' onClick={ e => handleClick(e, pirate.hand) }>No</button>
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default OnePirate