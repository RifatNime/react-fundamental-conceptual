import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProducts/SingleProduct';
import './Allproducts.css'

const Allproducts = (props) => {
    const {setCartCount} = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then( (res) => res.json())
            .then( (data) => setProducts(data));

    }, [products])
    return (
        <div>
            <div className="row container">
            {products.map((pd,index) => (
                <SingleProduct 
                    setCartCount={setCartCount}
                    key = {pd.id} 
                    // key = {index}  jodi key na thake
                    
                    product = {pd}
                ></SingleProduct>))}
            
            </div>
            
        </div>
    );
};

export default Allproducts;