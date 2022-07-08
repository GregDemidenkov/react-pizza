import React from 'react'
import PropTypes from 'prop-types';
import bar from "../img/Vector.svg"

const SortPopup = React.memo(function SortPopup({items, activeSortType, onClickSortType}) {
    
    const onSelectItem = (index) => {
        onClickSortType(index);
    }
    return (
        <div className="sort">
            <img src={bar} alt=""/>
            <p>Сортировка по:</p>
            <div className="container_a">
                <a href="#">{items.find(obj => obj.type === activeSortType).name}</a>
            </div>
            <ul>
            {
                items && items.map((obj, index) => 
                <li 
                onClick = {()=> onSelectItem(obj)} 
                key = {`${obj.type}_${index}`} 
                className={activeSortType === obj.type ? 'active' : ''}>
                {obj.name}</li>)
            }
            </ul>
        </div>
    )
})

SortPopup.defaultProps = {
    items: [],
}

export default SortPopup
