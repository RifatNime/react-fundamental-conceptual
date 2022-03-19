import React from 'react';
import './Menubar.css';

 const Menubar = (props) => {
//1. const Menubar = (props) => {
/* const Menubar = ({country}) => {  //2.
    // const {country} = props;
    //1. console.log(props);
    console.log(country); //2. */
    return (
        <div>
            {/* <h1>MenuBar</h1> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2">Logo</div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className='items me-4 p-2'>Home</li>
                        <li className='items me-4 p-2'>Contact</li>
                        <li className='items me-4 p-2'>Cart 
                            <sup>{props.count}</sup>
                        </li>
                        <li className='items me-4 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;