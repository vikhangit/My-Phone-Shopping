import React from 'react';
import './NotFound.scss';

function NotFound(props) {
    return (
        <div className="not-found">
            <div className="not-found__heading">
                <h2>404</h2>
                <p>Page not found</p>
            </div>
        </div>
    );
}

export default NotFound;