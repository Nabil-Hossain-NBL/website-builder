import React from 'react';
import SaleProduct from './SaleProduct';

function AllSaleProducts(props) {
    return (
        <div className='lg:grid lg:grid-cols-3 gap-8'>
            <SaleProduct />
            <SaleProduct />
            <SaleProduct />
        </div>
    );
}

export default AllSaleProducts;