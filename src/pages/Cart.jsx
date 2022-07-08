import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { CartItem } from '../Components'
import { clearCart, removeCartItem, minusItem, plusItem } from "../redux/actions/cart"
function Cart() {
    const dispatch = useDispatch();
    const {totalPrice, itemsCount, items} = useSelector(({cart}) => cart)

    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
    });
    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart());
        }
    };
    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    };
    const onPlusItem = (id) => {
        dispatch(plusItem(id))
    };
    const onMinusItem = (id) => {
        dispatch(minusItem(id))
    };
    return (
        <div className="wrapper">
            <div className="header">
                <div className="container">
                    <div className="label">
                        <div className="icon"></div>
                        <div className="name">
                            <h1>REACT PIZZA</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cartList">
                {
                    itemsCount ? <div className="containerCart-full">
                    <div className="label">
                        <div className="cart-label">
                            <img src="./img/cart-gray.png" alt=""></img>
                            <h1>Корзина</h1>
                        </div>
                        <div className="cart-clear">
                            <img src="./img/trash.png" alt=""></img>
                            <a onClick = {onClearCart} href="#">Очистить корзину</a>
                        </div>
                    </div>
                    {
                        addedPizzas.map((obj) => (
                            <CartItem 
                                id = {obj.id}
                                name = {obj.name} 
                                type = {obj.type} 
                                size = {obj.size} 
                                image = {obj.imageUrl} 
                                totalPrice = {items[obj.id].totalPrice}
                                itemsCount = {items[obj.id].items.length}
                                onRemove = {onRemoveItem}
                                onPlus = {onPlusItem}
                                onMinus = {onMinusItem}
                            ></CartItem>))
                    }
                    <div className="final-info">
                        <p>Всего пицц: <span className="totalcount">{itemsCount}</span> шт.</p>
                        <p>Сумма заказа: <span className="totalprice">{totalPrice}</span><span> ₽</span></p>
                    </div>
                    <div className="button-row">
                        <Link to = "/">
                            <a href="#">
                                <div className="comeback">
                                    <img src="./img/back.png" alt=""></img>
                                    <p>Вернуться назад</p>
                                </div>
                            </a>
                        </Link>
                        <div className="pay">
                            <p>Оплатить сейчас</p>
                        </div>
                    </div>
                </div> : <div className="containerCart">
                    <h1>Корзина пустая 😕</h1>
                    <h2>Вероятней всего, вы не заказывали ещё пиццу.<br/>Для того, чтобы заказать пиццу, перейди на главную страницу.</h2>
                    <div className="img"></div>
                    <Link to = "/">
                        <a href="#">
                            <div className="button">
                                <p>Вернуться назад</p>
                            </div>
                        </a>
                    </Link>
                </div>
                }
            </div>    
        </div>
    )
}

export default Cart





{/* <div className="wrapper">
            <div className="header">
                <div className="container">
                    <div className="label">
                        <div className="icon"></div>
                        <div className="name">
                            <h1>REACT PIZZA</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cartList">
                <div className="containerCart">
                    <h1>Корзина пустая 😕</h1>
                    <h2>Вероятней всего, вы не заказывали ещё пиццу.<br/>Для того, чтобы заказать пиццу, перейди на главную страницу.</h2>
                    <div className="img"></div>
                    <Link to = "/">
                        <a href="#">
                            <div className="button">
                                <p>Вернуться назад</p>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>    
        </div> */}