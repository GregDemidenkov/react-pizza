import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


import cart from "../img/cart1.png"

function Button() {
    const {totalCount, totalPrice} = useSelector(({cart}) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.itemsCount,
    }));

    return (
        <Link to="/cart">
            <a href="#">
                <div className="button-cart">
                    <p>{totalPrice} ₽</p>
                    <div className="vertical-line"></div>
                    <div className="container">
                        <img src={cart} alt=""/>
                        <p>{totalCount}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}



export default Button;
