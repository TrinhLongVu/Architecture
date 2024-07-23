import React from 'react';

import "./TopProductsListView.css";

export default function TopProductsListView(props){
    const {data} = props;

    const totalSales = data.reduce((total, product) => total + product.sales, 0);

    const darkTones = ['#8B0000', '#006400', '#00008B', '#8B008B', '#8B4513'];

    const lightTones = ['#FF4500', '#32CD32', '#1E90FF', '#9370DB', '#D2691E'];

    return (
        <div className='container'>
          <h2>Top Products</h2>
          <div className='header'>
            <strong>Rank</strong>
            <strong>Name</strong>
            <strong>Percentage</strong>
            <strong>Sales</strong>
          </div>
          <ul className='product-list'>
            {data.map((product, index) => (
              <li key={product.id}>
                <span>{index + 1}</span>
                <span>{product.name}</span>
                <div>
                  <div style={{ width: `${product.sales/totalSales*100}%`, backgroundColor:  darkTones[index]}}></div>
                </div>
                <span style={{ backgroundColor:  darkTones[index]}}>
                  {product.sales}
                </span>
              </li>
            ))}
          </ul>
        </div>
    );
}