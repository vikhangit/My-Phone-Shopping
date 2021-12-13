import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewProduct.scss';
import { Button, Col, Row } from 'reactstrap';
import NewProductItem from '../NewProductItem';

NewProduct.propTypes = {
    cardItem: PropTypes.array,
    onAddToCart: PropTypes.func,
    onViewDetail: PropTypes.func,
    visible: PropTypes.number,
};
NewProduct.defaultProps = {
    cardItem: null,
    onAddToCart: null,
    onViewDetail: null,
    visible: 0,
}

function NewProduct(props) {
    const { cardItem, onAddToCart, onViewDetail, visible } = props;
    return (
        <div className="new-product__arrivals-content">
            <Row>
                {cardItem.slice(0, visible).map(item => (
                    <Col sm="6" xs="6" md="4" lg="3" key={item.id}>
                        <NewProductItem
                            newProductItem={item}
                            onClickAddToCart={onAddToCart}
                            onClickViewDetail={onViewDetail}
                        />
                    </Col>
                ))}
            </Row>
        </div>


    );
}

export default NewProduct;