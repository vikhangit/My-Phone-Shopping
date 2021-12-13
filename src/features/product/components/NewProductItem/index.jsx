import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import './NewProductItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

NewProductItem.propTypes = {
    newProductItem: PropTypes.object,
    onClickAddToCart: PropTypes.func,
    onClickViewDetail: PropTypes.func,
}
NewProductItem.defaultProps = {
    newProductItem: {},
    onClickAddToCart: null,
    onClickViewDetail: null,
}

function NewProductItem(props) {
    const { newProductItem, onClickAddToCart, onClickViewDetail } = props;
    const sale = (a, b) => {
        return (100 - ((a / b) * 100)).toFixed(0);
    }

    const addToProductCart = (newProductItem) => {
        if (!onClickAddToCart) return;
        onClickAddToCart(newProductItem);
    }

    const clickOnImg = (newProductItem) => {
        if (!onClickViewDetail) return;
        onClickViewDetail(newProductItem);
    }
    return (
        <div className="card new-product-item mt-3">
            <a>
                <img
                    src={newProductItem.src}
                    className="new-product-item__img mt-3 card-img-top "
                    alt={newProductItem.src}
                    onClick={() => clickOnImg(newProductItem)}
                />
            </a>
            <div className="card-body">
                <h5 className="card-title">{newProductItem.name}</h5>
                <div className="card-text">
                    <strong>{newProductItem.price}$</strong><br />
                    {newProductItem.price < newProductItem.oldPrice
                        && <span style={{ textDecoration: "line-through" }}>
                            {newProductItem.oldPrice}$
                            </span>
                    }
                    {newProductItem.price < newProductItem.oldPrice
                        && <span className="mx-1">
                            -{sale(newProductItem.price, newProductItem.oldPrice)}%
                           </span>
                    }
                    {newProductItem.price < newProductItem.oldPrice
                        && <p className="new-product-item__sale">sale</p>
                    }
                </div>
                <Button
                    block
                    className="mt-3 button"
                    color="primary"
                    size='sm'
                    onClick={() => addToProductCart(newProductItem)}
                >
                    <FontAwesomeIcon className="mx-1" icon="shopping-cart" />
                     Add to cart
                </Button>
            </div>
        </div>
    );
}

export default NewProductItem;