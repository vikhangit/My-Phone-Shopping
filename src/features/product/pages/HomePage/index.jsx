import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../../../components/Banner';
import NewProductItem from '../../components/NewProductItem';
import { addToProductCart } from '../../productCartSlice';
import { Col, Container, Row } from 'reactstrap';

import './Home.scss';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router';

HomePage.propTypes = {};

function HomePage(props) {
    const cardItem = useSelector(state => state.products);
    const headItem = useSelector(state => {
        const findProduct = state.products.filter(x => x.isHeadPhone === true);
        return findProduct;
    });
    const powerBankItem = useSelector(state => {
        const findProduct = state.products.filter(x => x.isPowerBank === true);
        return findProduct;
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
        console.log("Detail: ", product);
        const detailUrl = `/product-detail/${product.name}`;
        history.push(detailUrl);
    }
    return (
        <div>
            <Banner />
            <div className="new-product">
                <div className="new-product__section-arrivals">
                    <Container>
                        <div className="new-product__arrivals-heading">
                            <h2>Featured Products</h2>
                        </div>
                        {/* <NewProduct
                            cardItem={cardItem}
                            onAddToCart={onAddToCart}
                            onViewDetail={onViewDetail}
                        /> */}
                        <div className="new-product__arrivals-content">
                            <Row>
                                {cardItem.slice(0, 4).map(item => (
                                    <Col sm="6" xs="6" md="4" lg="3" key={item.id}>
                                        <NewProductItem
                                            newProductItem={item}
                                            onClickAddToCart={onAddToCart}
                                            onClickViewDetail={onViewDetail}
                                        />
                                    </Col>
                                ))}
                                {headItem.slice(0, 4).map(item => (
                                    <Col sm="6" xs="6" md="4" lg="3" key={item.id}>
                                        <NewProductItem
                                            newProductItem={item}
                                            onClickAddToCart={onAddToCart}
                                            onClickViewDetail={onViewDetail}
                                        />
                                    </Col>
                                ))}
                                {powerBankItem.slice(0, 4).map(item => (
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
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default HomePage;