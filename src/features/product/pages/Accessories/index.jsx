import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProductCart } from '../../productCartSlice';
import NewProduct from '../../components/NewProduct';
import { Button, Col, Container, Row } from 'reactstrap';

import './Accessories.scss';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccessoriesList from '../../components/AccessoriesList';
import NewProductItem from '../../components/NewProductItem';

function Accessories(props) {
    const headPhone = useSelector(state => {
        const find = state.products.filter(x => x.isHeadPhone === true);
        return find;
    });
    const powerBank = useSelector(state => {
        const find = state.products.filter(x => x.isPowerBank === true);
        return find;
    });
    const charger = useSelector(state => {
        const find = state.products.filter(x => x.isCharger === true);
        return find;
    });
    const speaker = useSelector(state => {
        const find = state.products.filter(x => x.isSpeaker === true);
        return find;
    });

    const dispatch = useDispatch();
    const history = useHistory();
    const alert = useAlert();

    const onAddToCart = (product) => {
        const action = addToProductCart(product);
        dispatch(action);
        alert.success(
            <div className="alert">
                You have successfully added product {product.name} to your cart
            </div>
        );
    }
    const onViewDetail = (product) => {
        const detailUrl = `/product-detail/${product.name}`;
        history.push(detailUrl);
    }
    return (
        <div className="accessories">
            <div className="accessories__section-arrivals">
                <Container>
                    <div className="accessories__arrivals-heading">
                        <h2>Accessories</h2>
                    </div>
                    <AccessoriesList
                        headPhone={headPhone}
                        powerBank={powerBank}
                        charger={charger}
                        speaker={speaker}
                        onViewDetail={onViewDetail}
                        onAddToCart={onAddToCart}
                    />
                </Container>
            </div>
        </div>
    );
}

export default Accessories;