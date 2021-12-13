import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCartItem.scss';
import { Button, ButtonGroup } from 'reactstrap';
import { useAlert } from 'react-alert';

ProductCartItem.propTypes = {
    cartItem: PropTypes.object,
    onDeleteClick: PropTypes.func,
    onUpdateClick: PropTypes.func,
    onUpdateClickDecrease: PropTypes.func,
};
ProductCartItem.defaultProps = {
    cartItem: {},
    onDeleteClick: null,
    onUpdateClick: null,
    onUpdateClickDecrease: null,
}

function ProductCartItem(props) {
    const { cartItem, onDeleteClick, onUpdateClick, onUpdateClickDecrease } = props;

    const [count, setCount] = useState(cartItem.quantity);

    const alert = useAlert();

    const Decrease = (cartItem) => {
        if (onUpdateClickDecrease) {
            if (count <= 1) {
                setCount(1);
                alert.error("Plase Click Delete button if you want delete");
            } else {
                setCount(count - 1);
            }
            onUpdateClickDecrease(cartItem);
        }
    }
    const Incrase = (cartItem) => {
        if (onUpdateClick) {
            setCount(count + 1);
        }
        onUpdateClick(cartItem);
    }
    const total = (a, b) => {
        return a * b;
    }

    const onClickButtonDelete = (cartItem) => {
        if (onDeleteClick) onDeleteClick(cartItem);
    }

    return (
        <tr>
            <td>
                <img src={cartItem.src} className="product-cart__img" alt={cartItem.src} />
            </td>
            <td>{cartItem.name}</td>
            <td>{cartItem.price}$</td>
            <td>
                <ButtonGroup size="sm">
                    <Button
                        size="sm"
                        className="mx-2 product-cart__btn-quantity"
                        onClick={() => Decrease(cartItem)}
                    >
                        -
                    </Button>
                    <span className="mt-1">{count > 0 ? count : 1}</span>
                    <Button
                        className="mx-2 product-cart__btn-quantity"
                        onClick={() => Incrase(cartItem)}
                    >
                        +
                    </Button>
                </ButtonGroup>
            </td>
            <td>{total(cartItem.price, count)}$</td>
            <td>
                <Button
                    className="product-cart__btn-remove"
                    size="sm" color="danger"
                    onClick={() => onClickButtonDelete(cartItem)}
                >
                    X
                </Button>
            </td>
        </tr>
    );
}

export default ProductCartItem;