import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProductCart } from "../../productCartSlice";
import NewProduct from "../../components/NewProduct";
import { Button, Col, Container, Input, Row } from "reactstrap";

import "./Product.scss";
import { useAlert } from "react-alert";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../components/SearchBar";

function Product(props) {
  const cardItem = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [visible, setVisible] = useState(8);
  const showMoreItem = () => {
    setVisible((previousVlue) => previousVlue + 8);
    // setVisible(visible + 8);
  };
  const onAddToCart = (product) => {
    const action = addToProductCart(product);
    dispatch(action);
    alert.success(
      <div className="alert">
        You have successfully added product {product.name} to your cart
      </div>
    );
  };
  const onViewDetail = (product) => {
    const detailUrl = `/product-detail/${product.name}`;
    history.push(detailUrl);
  };

  const handleSearch = (keyword) => {
    setSearchTerm(keyword);
    if (keyword !== "") {
      // const newProductList = cardItem.filter((item) => {
      //     return Object.values(item).join(" ").toLowerCase().includes(keyword.toLowerCase());
      // });
      const newProductList = cardItem.filter((x) =>
        x.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setSearchResult(newProductList);
    } else {
      setSearchResult(cardItem);
    }
  };
  return (
    <div className="new-product">
      <div className="new-product__section-arrivals">
        <Container>
          <div className="new-product__arrivals-heading">
            <h2>Products</h2>
          </div>
          <SearchBar keyWord={searchTerm} searchWithKeyWord={handleSearch} />
          <NewProduct
            cardItem={searchTerm.length < 1 ? cardItem : searchResult}
            onAddToCart={onAddToCart}
            onViewDetail={onViewDetail}
            visible={visible}
          />
          <Row className="mt-4">
            <Button
              block
              className="new-product__btn-seemore"
              color="primary"
              onClick={showMoreItem}
            >
              See More
              <FontAwesomeIcon icon="chevron-down" className="mx-1" />
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Product;
