import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Header, Category, PizzaBlock, PizzaLoadingBlock} from '../Components/';
import {setCategory, setSortBy} from "../redux/actions/filters"
import {fetchPizzas} from "../redux/actions/pizzas"
import {addPizzaToCart} from "../redux/actions/cart"

function Home() {
    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filter}) => filter);

    const dispatch = useDispatch();
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: "ADD_PIZZA_CART",
            payload: obj
        })
    }
    const categoryName = ['Мясные','Вегетарианские','Гриль','Острые','Закрытые']

    React.useEffect(() => {
       dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy]);

    return ( 
        <div className="wrapper">
            <Header/>
            <Category onSelectSortType = {onSelectSortType} activeCategory = {category} onClickCategory={onSelectCategory} items = {categoryName}/>
            <div className="menu">
                <div className="container">
                    <h2>Все пиццы</h2>
                    <ul>
                        {isLoaded 
                        ? items.map((obj) => <PizzaBlock 
                        onClickAddPizza = {handleAddPizzaToCart} 
                        key = {obj.id} 
                        addedCount = { cartItems[obj.id] && cartItems[obj.id].items.length} 
                        {...obj}/>)
                        :  Array(8).fill(0).map((_, index) => <PizzaLoadingBlock key = {index}/>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
