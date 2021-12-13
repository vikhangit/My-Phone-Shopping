import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCartList from '../../components/ProductCartList';
import { deleteCart, payingAll, updateCart, updateCartDecrase, updateCartIncrease } from '../../productCartSlice';
import BackToHome from '../BackToHome';
import { useAlert } from 'react-alert';

function ProductCart(props) {
    const initialProductCart = useSelector(state => state.productCarts);
    const dispatch = useDispatch();
    const alert = useAlert();

    const handleCartDelectClick = (cartItem) => {
        const action = deleteCart(cartItem.id);
        dispatch(action);
        alert.success(
            <div className="alert">
                You have removed {cartItem.quantity} products {cartItem.name} from your cart
            </div>
        );

    }
    const handleCartUpdateClick = (cartItem) => {
        const action = updateCartIncrease(cartItem);
        console.log("Action", action)
        dispatch(action);
    }

    const handleCartUpdateClickDecrease = (cartItem) => {
        const action = updateCartDecrase(cartItem);
        console.log("Action", action)
        dispatch(action);
    }

    const handlePaying = (cartItem) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(payingAll(cartItem));
                alert.success(
                    <div className="alert">
                        You have successfully paid. Thank You
                    </div>
                );
                resolve(true);
            }, 1000);
        });
    }
    return (
        <div>
            {initialProductCart.length > 0
                ? <ProductCartList
                    productCartList={initialProductCart}
                    onClickDeleteCart={handleCartDelectClick}
                    onClickUpdateCart={handleCartUpdateClick}
                    onClickUpdateCartDecrase={handleCartUpdateClickDecrease}
                    onClickPayingCart={handlePaying}
                />
                : <BackToHome />
            }
        </div>
    );
}

export default ProductCart;