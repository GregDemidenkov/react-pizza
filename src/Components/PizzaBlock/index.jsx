import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import plusNoactive from "../../img/plus-noactive.png"
import { LoadingBlock } from './LoadingBlock';


function PizzaBlock({ id, imageUrl, name, description, types, sizes, price, onClickAddPizza, addedCount}) {
    const dough = ['тонкое','традиционное'];
    const availableSizes = [25,30,40];
    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    };
    const onSelectSize = (index) => {
        setActiveSize(index);
    };
    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[activeSize],
            type: dough[activeType]
        }
        onClickAddPizza(obj)
    };
    return (
        <li>
            <img src={imageUrl} alt=""/>
            <div className="info">
                <p>{description}</p>
            </div>
            <h3>{name}</h3>
            <div className="characteristic">
                <ul className="dough">
                    {dough.map((type, index) => (
                        <li key = {type} onClick = {() => onSelectType(index)} 
                        className={classNames({
                            active: activeType === index,
                            disabled: !types.includes(index)
                        })}>{type}</li>
                    ))}
                </ul>
                <ul className="size">
                    {availableSizes.map((size, index) => (
                        <li key = {size} onClick = {() => onSelectSize(index)} 
                        className={classNames({
                            active: activeSize === index,
                            disabled: !sizes.includes(size)
                        })}>{size} см</li>
                    ))}
                </ul>
            </div>
            <div className="priceANDcart">
                <p className="price">от <span>{price}</span> ₽</p>
                <div onClick = {onAddPizza} className="button">
                    {addedCount && <p className="countElement">{addedCount}</p>}
                    <img src={plusNoactive} alt=""/>
                    <p className="toCart">Добавить</p>
                </div>
            </div>
        </li>
    )
}

PizzaBlock.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    price: PropTypes.number ,
    category: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
}
PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: []
}
export default PizzaBlock
