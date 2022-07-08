import React from 'react'

function CartItem({id, name, type, size, image, totalPrice, itemsCount, onRemove, onMinus, onPlus}) {
    const handleRemoveClick = () => {
        onRemove(id)
    }
    const handlePlusItem = () => {
        onPlus(id)
    }
    const handleMinusItem = () => {
        onMinus(id)
    }
    return (
    <div className="item">
        <div className="first">
            <img src={image} alt=""></img>
            <div className="characteristic-pizza">
                <h2>{name}</h2>
                <p>{type} тесто, {size} см</p>
            </div>
        </div>
        <div className="second">
            <div className="countChanger">
                <div onClick = {handlePlusItem} className="plus">+</div>
                    <p className="countItem">{itemsCount}</p>
                <div onClick = {handleMinusItem} className="minus">-</div>
            </div>
            <h2><span>{totalPrice}</span> ₽</h2>
            <div onClick = {handleRemoveClick} className="delete">x</div>
        </div>
    </div>
  )
}

export default CartItem