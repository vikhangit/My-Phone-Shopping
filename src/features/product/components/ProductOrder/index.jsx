import React from 'react';
import PropTypes from 'prop-types';

ProductOrder.propTypes = {
    cartItem: PropTypes.object,
};
ProductOrder.defaultProps = {
    cartItem: null,
}
const total = (a, b) => {
    return a * b;
}

function ProductOrder(props) {
    const { cartItem } = props
    return (
        <tr>
            <td>{cartItem.name}</td>
            <td>
                {cartItem.quantity}
            </td>
            <td>{total(cartItem.price, cartItem.quantity)}$</td>
        </tr>
    );
}

export default ProductOrder;