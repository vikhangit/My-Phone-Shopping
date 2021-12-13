import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Input, Row } from 'reactstrap';
import './SearchBar.scss';
import { useRef } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

SearchBar.propTypes = {
    keyWord: PropTypes.string,
    searchWithKeyWord: PropTypes.func,
};
SearchBar.defaultProps = {
    keyWord: '',
    searchWithKeyWord: null,
}
function SearchBar(props) {
    const { keyWord, searchWithKeyWord } = props;
    // const [input, setInput] = useState("");
    const InputElement = useRef("");

    // const getSearchKeyWord = (e) => {
    //     setInput(e.target.value);
    // }
    // const handleSubmit = () => {
    //     if (searchWithKeyWord) {
    //         searchWithKeyWord(input);
    //     }
    // }
    const getSearchKeyWord = () => {
        searchWithKeyWord(InputElement.current.value);
    }
    return (
        <Row className="my-2">
            <Col lg="6" sm="12" md="8" xs="12">
                <div className="new-product__search">
                    <input
                        placeholder="Enter keyword"
                        className="form-control"
                        ref={InputElement}
                        value={keyWord}
                        onChange={getSearchKeyWord}
                    />
                    <FontAwesomeIcon className="new-product__search--btn ml-2" icon={["fas", "search"]} />
                </div>
            </Col>
        </Row>
    );
}

export default SearchBar;