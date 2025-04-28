import React from 'react';

function Category(props) {

    const {addToCart, data} = props;

    const handleClick = (product) => {
        addToCart(product)
    }

    return (
        <ul>
            {data.map((product) => (
                <li key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price} zł</p>
                    <button onClick={() => handleClick(product)}>Add to cart</button>
                </li>
        
            ))}
        </ul>
    )
}

export default Category;
