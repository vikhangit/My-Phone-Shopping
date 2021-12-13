import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Message from '../../../../constants/message';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BackToHome(props) {
    const history = useHistory()
    return (
        <div className="text-center">
            <p style={{ fontSize: '15px', fontWeight: '500' }}>{Message.MESSAGE_CART_EMPTY}</p>
            <Button
                style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }}
                onClick={() => {
                    return history.push('/');
                }}
            >
                Back To Home <FontAwesomeIcon icon="chevron-right" /><FontAwesomeIcon icon="chevron-right" />
            </Button>
        </div>
    );
}

export default BackToHome;