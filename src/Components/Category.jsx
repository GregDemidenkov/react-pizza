import React from 'react';
import {useSelector} from "react-redux"

import SortPopup from './SortPopup';

const Category = React.memo(function Category({activeCategory, items, onClickCategory, onSelectSortType}) {

    const [activeItem, setActiveItem] = React.useState(null)
    const {sortBy} = useSelector(({filter}) => filter);
    
    const sortItems = [
        {name:'популярности', type: "rating", order: "desc"},
        {name: 'цене', type: "price", order: "desc"},
        {name: 'алфавиту', type: "name", order: "asc"}
    ]
    
    return (
        <div className="category">
            <div className="container">
                <div className="list">
                    <ul>
                        <li onClick = {() => onClickCategory(null)} 
                        className={activeCategory === null ? 'button-category active' : 'button-category'}>
                        Все</li>
                        {
                            items && items.map((category, index) => 
                            <li 
                            onClick = {()=> onClickCategory(index)} 
                            key = {`${category}_${index}`} 
                            className={activeCategory === index ? 'button-category active' : 'button-category'}>
                            {category}</li>)
                        }
                    </ul>
                </div>
                <SortPopup activeSortType = {sortBy.type} items = {sortItems} onClickSortType = {onSelectSortType}/>
            </div>
        </div>
    );
})

export default Category;