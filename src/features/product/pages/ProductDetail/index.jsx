import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';
import { useHistory, useParams } from 'react-router';
import './ProductDetail.scss';
import { addToProductCart } from '../../productCartSlice';
import { useAlert } from 'react-alert';

ProductDetail.propTypes = {

};

function ProductDetail(props) {
    const { name } = useParams();
    const product = useSelector(state => {
        const findId = state.products.find(x => x.name === name);
        console.log({ name }, { findId });
        return findId;
    });
    const dispatch = useDispatch();
    const alert = useAlert();
    const history = useHistory();
    const onAddToCart = (product) => {
        const action = addToProductCart(product);
        dispatch(action);
        alert.success(
            <div className="alert">
                You have successfully added product {product.name} to your cart
            </div>
        );
        history.push("/product-cart");
    }
    const sale = (a, b) => {
        return (100 - ((a / b) * 100)).toFixed(0);
    }
    return (
        <div className="product-detail">
            <Container>
                <div className="product-detail__heading">
                    <h2>Products Cart</h2>
                </div>
                <div className="product-detail__content">
                    <div className="product-detail__content-left">
                        <img src={product.src} alt={product.src} />
                    </div>
                    <div className="product-detail__content-right">
                        {product.name}
                        <div>
                            <strong className="text-danger">{product.price}$</strong><br />
                            {product.price < product.oldPrice
                                && <span style={{ textDecoration: "line-through" }}>
                                    {product.oldPrice}$
                            </span>
                            }
                            {product.price < product.oldPrice
                                && <span className="mx-1">
                                    -{sale(product.price, product.oldPrice)}%
                           </span>
                            }
                        </div>
                        {/* <Button block
                            className="mt-3 product-detail__content-right--btnlike"
                            color="primary"
                        >
                            Like
                        </Button> */}
                        <Button block
                            className="mt-3 product-detail__content-right--btn"
                            color="primary"
                            onClick={() => onAddToCart(product)}
                        >
                            Add To Cart
                        </Button>
                    </div>
                </div>
            </Container>
            <hr />
        </div>
    );
}

export default ProductDetail;