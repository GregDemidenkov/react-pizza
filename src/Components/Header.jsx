import React from 'react';
import Button from './Button'


function Header() {
    return(
        <div className="header">
            <div className="container">
                <div className="label">
                    <div className="icon"></div>
                    <div className="name">
                        <h1>REACT PIZZA</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <Button/>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default Header;
