import React from 'react';
import FoodSection from '../FoodSection/FoodSection';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='banner-section d-flex justify-content-center align-items-center'>
            <div className='banner-text mx-md-0 mx-3'>
                <div>
                    <h1 className='mb-md-5 mb-3 text-center'>Best Food Waiting For Your Belly.</h1>
                </div>
                <div className='row'>
                    <div className='search-box col-md-10 d-flex justify-content-center'>
                        <div className='col-md-12'>
                            <input className='form-control border rounded-pill' type="text" name="" id="" />
                        </div>
                        <div>
                            <button className='btn btn-danger search-btn border rounded-pill'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FoodSection />
            </div>
        </div>
    );
};

export default HomeBanner;