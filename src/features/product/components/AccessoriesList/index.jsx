import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'reactstrap';
import NewProductItem from '../NewProductItem';


AccessoriesList.propTypes = {
    headPhone: PropTypes.array,
    powerBank: PropTypes.array,
    charger: PropTypes.array,
    speaker: PropTypes.array,
    onAddToCart: PropTypes.func,
    onViewDetail: PropTypes.func,

};
AccessoriesList.defaultProps = {
    headPhone: null,
    powerBank: null,
    charger: null,
    speaker: null,
    onAddToCart: null,
    onViewDetail: null,

}

function AccessoriesList(props) {
    const { headPhone, powerBank, charger, speaker,
        onAddToCart, onViewDetail
    } = props;
    const [showHeadPhone, setShowHeadPhone] = useState(false);
    const [showCharger, setShowCharger] = useState(false);
    const [showPowerBank, setShowPowerBank] = useState(false);
    const [showSpeaker, setShowSpeaker] = useState(false);

    const elementPhone = headPhone.map(item => (
        <Col sm="6" xs="6" md="4" lg="3" key={item.id}>
            <NewProductItem
                newProductItem={item}
                onClickAddToCart={onAddToCart}
                onClickViewDetail={onViewDetail}
            />
        </Col>
    ));
    const elementPowerBank = powerBank.map(item => (
        <Col sm="6" xs="6" md="4" lg="3" key={item.id}>
            <NewProductItem
                newProductItem={item}
                onClickAddToCart={onAddToCart}
                onClickViewDetail={onViewDetail}
            />
        </Col>
    ));
    const elementCharger = charger.map(item => (
        <Col sm="6" xs="6" md="4" lg="3" key={item.id}>
            <NewProductItem
                newProductItem={item}
                onClickAddToCart={onAddToCart}
                onClickViewDetail={onViewDetail}
            />
        </Col>
    ));
    const elementSpeaker = speaker.map(item => (
        <Col sm="6" xs="6" md="4" lg="3" key={item.id}>
            <NewProductItem
                newProductItem={item}
                onClickAddToCart={onAddToCart}
                onClickViewDetail={onViewDetail}
            />
        </Col>
    ));
    const showHeadPhoneItem = () => {
        setShowHeadPhone(true);
        setShowPowerBank(false);
        setShowSpeaker(false);
        setShowCharger(false);
    }
    const showPowerBankItem = () => {
        setShowHeadPhone(false);
        setShowPowerBank(true);
        setShowSpeaker(false);
        setShowCharger(false);
    }
    const showChargerItem = () => {
        setShowHeadPhone(false);
        setShowPowerBank(false);
        setShowSpeaker(false);
        setShowCharger(true);
    }
    const showSpeakerItem = () => {
        setShowHeadPhone(false);
        setShowPowerBank(false);
        setShowSpeaker(true);
        setShowCharger(false);
    }

    return (
        <div className="accessories__arrivals-content">
            <Row className="ml-1">
                <Button
                    className="mx-2  accessories__arrivals-content-btn"
                    onClick={showHeadPhoneItem}
                >
                    Head Phone
                </Button>
                <Button
                    className="mx-2 accessories__arrivals-content-btn"
                    onClick={showPowerBankItem}
                >
                    Power Charger
                </Button>
                <Button
                    className="mx-2 accessories__arrivals-content-btn"
                    onClick={showChargerItem}
                >
                    Cable, Charger
                </Button>
                <Button
                    className="mx-2 accessories__arrivals-content-btn"
                    onClick={showSpeakerItem}
                >
                    Speaker
                </Button>
            </Row>
            <Row>
                {showHeadPhone && elementPhone}
                {showPowerBank && elementPowerBank}
                {showCharger && elementCharger}
                {showSpeaker && elementSpeaker}
            </Row>
        </div>


    );
}

export default AccessoriesList;