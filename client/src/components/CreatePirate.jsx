import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useOutletContext } from 'react-router-dom';

const blankPirate = {
    name: '',
    url: '',
    treasure: 0,
    catchPhrase: '',
    position: '',
    leg: true,
    eye: true,
    hand: true,
}

const CreatePirate = () => {
    
    const navigate = useNavigate();
    const { flag, setFlag } = useOutletContext();
    const [ formPirate, setFormPirate ] = useState(blankPirate);
    const [ errors, setErrors ] = useState(null);
    const checkboxes = ['leg', 'eye', 'hand'];
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (checkboxes.includes(name)) {
            setFormPirate({
                ...formPirate,
                [name]: e.target.checked
            });
        } else {
            setFormPirate({
                ...formPirate,
                [name]: value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates', formPirate)
            .then( res => {
                console.log(res.data);
                setFlag(!flag);
                setErrors(null);
                navigate('/Pirates');
            })
            .catch( err => {
                console.log(err);
                setErrors(err.response.data.errors);
            } );
    };

    return (
        <div>
            <h2 className='text-center'>Add Pirate!</h2>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-lable">Name: </label>
                            <input type="text" name='name' className="form-control" value={formPirate.name} onChange={ handleChange } />
                            {
                                errors?.name && 
                                <span className='form-text text-danger'>{errors.name.message}</span>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="url" className="form-lable">Image URL: </label>
                            <input type="text" name='url' className="form-control" value={formPirate.url} onChange={ handleChange } />
                            {
                                errors?.url && 
                                <span className='form-text text-danger'>{errors.url.message}</span>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="treasure" className="form-lable"># of Treasure Chests: </label>
                            <input type="number" name='treasure' className="form-control" value={formPirate.treasure} onChange={ handleChange } />
                            {
                                errors?.treasure && 
                                <span className='form-text text-danger'>{errors.treasure.message}</span>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="catchPhrase" className="form-lable">Pirate Catch Phrase: </label>
                            <input type="text" name='catchPhrase' className="form-control" value={formPirate.catchPhrase} onChange={ handleChange } />
                            {
                                errors?.catchPhrase && 
                                <span className='form-text text-danger'>{errors.catchPhrase.message}</span>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-lable">Crew Position: </label>
                            <select name="position" id="position" className='form-select' value={formPirate.position} onChange={ handleChange }>
                                <option value="none" selected>Select Position:</option>
                                <option value="Captain">Captain</option>
                                <option value="First Mate">First Mate</option>
                                <option value="Quarter Master">Quarter Master</option>
                                <option value="Boatswain">Boatswain</option>
                                <option value="Powder Monkey">Powder Monkey</option>
                            </select>
                            {
                                errors?.position && 
                                <span className='form-text text-danger'>{errors.position.message}</span>
                            }
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor="leg" className="form-check-label">Peg Leg?</label>
                            <input type="checkbox" name='leg' id='leg' className="form-check-input" checked={formPirate.leg} onChange={ handleChange } />
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor="eye" className="form-check-label">Eye Patch?</label>
                            <input type="checkbox" name='eye' id='eye' className="form-check-input" checked={formPirate.eye} onChange={ handleChange } />
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor="hand" className="form-check-label">Hook Hand?</label>
                            <input type="checkbox" name='hand' id='hand' className="form-check-input" checked={formPirate.hand} onChange={ handleChange } />
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" className="btn btn-primary">Create!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePirate