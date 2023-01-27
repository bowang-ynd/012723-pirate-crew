import React from 'react';
import axios from 'axios';
import { Link, useOutletContext, useNavigate } from 'react-router-dom';

const AllPirates = () => {
    
    const { pirates, flag, setFlag } = useOutletContext();
    const navigate = useNavigate();
    
    const handleDelete = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then( res => {
                console.log(res.data);
                setFlag(!flag);
                navigate('/pirates');
            })
            .catch( err => console.log(err) );
    }
    
    return (
        <div>
            <h2 className='text-center'>Current Pirate Crew</h2>
            <div className="card">
                {
                    pirates && pirates.map( pirate => {
                        return (
                            <>
                            <div className="card-body d-flex justify-content-evenly">
                                <div className='container' style={ { maxWidth: '150px' } }>
                                    <img src={ pirate.url } alt="pirate img" style={ { height:'150px' } } />
                                </div>
                                <div className='container'>
                                    <h3 className='text-center'>{ pirate.name }</h3>
                                    <div className="d-flex justify-content-evenly">
                                        <Link to={ `/pirates/${ pirate._id }` } className='btn btn-primary me-3'>View Pirate</Link>
                                        <button className="btn btn-danger" onClick={ e => handleDelete(e, pirate._id) }>Walk the Plank</button>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllPirates