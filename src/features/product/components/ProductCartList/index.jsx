import React from 'react';
import PropTypes from 'prop-types';
import './ProductCartList.scss';
import { Button, Container, Table } from 'reactstrap';
import ProductCartItem from '../ProductCartItem';
import Modal from 'react-modal';
import ProductOrder from '../ProductOrder';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        // bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        fontSize: '11px'
    }
};

ProductCartList.propTypes = {
    productCartList: PropTypes.array,
    onClickDeleteCart: PropTypes.func,
    onClickUpdateCart: PropTypes.func,
    onClickUpdateCartDecrase: PropTypes.func,
    onClickPayingCart: PropTypes.func,
};

ProductCartList.defaultProps = {
    productCartList: [],
    onClickDeleteCart: null,
    onClickUpdateCart: null,
    onClickUpdateCartDecrase: null,
    onClickPayingCart: null,
}

function ProductCartList(props) {
    const { productCartList,
        onClickDeleteCart,
        onClickUpdateCart,
        onClickUpdateCartDecrase,
        onClickPayingCart,
    } = props;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const totalAmount = (productCartList) => {
        let total = 0;
        if (productCartList.length > 0) {
            for (let i = 0; i < productCartList.length; i++) {
                total += productCartList[i].price * productCartList[i].quantity;
            }
        }
        return total;
    }
    const totalQuantity = (productCartList) => {
        let total = 0;
        if (productCartList.length > 0) {
            for (let i = 0; i < productCartList.length; i++) {
                total += productCartList[i].quantity;
            }
        }
        return total;
    }

    const onClickPaying = (productCartList) => {
        if (onClickPayingCart) {
            onClickPayingCart(productCartList);
        }
    }
    return (
        <div className="product-cart">
            <div className="product-cart__section-arrivals">
                <Container>
                    <div className="product-cart__arrivals-heading">
                        <h2>Products Cart</h2>
                    </div>
                    <Table borderless responsive>
                        <thead className="product-cart__table-header">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="product-cart__table-body">
                            {productCartList.map(item => (
                                <ProductCartItem
                                    key={item.id}
                                    cartItem={item}
                                    onDeleteClick={onClickDeleteCart}
                                    onUpdateClick={onClickUpdateCart}
                                    onUpdateClickDecrease={onClickUpdateCartDecrase}
                                />
                            ))}
                            <tr className="product-cart__table-body--footer">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total Amount</td>
                                <td>{totalAmount(productCartList)}$</td>
                                <td><Button onClick={openModal} className="product-cart__table-body--footer-btn">Paying</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Modal
                        isOpen={modalIsOpen}
                        ariaHideApp={false}
                        contentLabel="Label Modal"
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >

                        <h5 className="text-center text-primary mb-3 product-cart__order-heading">Check your order</h5>
                        <Table striped>
                            <thead className="product-cart__order-table-header">
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody className="product-cart__order-table-body">
                                {productCartList.map(item => (
                                    <ProductOrder
                                        key={item.id}
                                        cartItem={item}
                                    />
                                ))}
                                <tr className="product-cart__order-table-body--footer">
                                    <td>Total</td>
                                    <td>{totalQuantity(productCartList)}</td>
                                    <td>{totalAmount(productCartList)}$</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button
                            className="product-cart__btn-order"
                            onClick={closeModal}
                            color="danger"
                        >
                            Close
                        </Button>
                        <Button
                            color="success"
                            onClick={() => onClickPaying(productCartList)}
                            className="mx-2 product-cart__btn-order"
                        >
                            Paying
                        </Button>
                    </Modal>

                </Container>
            </div>
        </div>
    );
}

export default ProductCartList;