import React from 'react';

function Cart(props) {

    const {removeFromCart, cart} = props;

    const handleClick = (product) => {
        removeFromCart(product);
    }

    return (
        <div>
            <h2>W twoim koszyku:</h2>
            {cart.map((product) => (
                <li key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price} zl</p>
                    <button onClick={() => handleClick(product)}>Remove from cart</button>
                </li>
            ))}
        </div>
    )
}

export default Cart;