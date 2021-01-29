import React from 'react'
import '../scss/app.scss'
import { Categories, SortPopup, PizzaBlock, MyLoader } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'asc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
]

export function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    React.useEffect(() => {
        fetchPizzas(sortBy, category)(dispatch)
    }, [category, sortBy])

    const onSelectCategory = React.useCallback(
        (index) => {
            dispatch(setCategory(index))
        },
        [setCategory],
    )
    const onSelectSortType = React.useCallback(
        (type) => {
            dispatch(setSortBy(type))
        },
        [setSortBy],
    )
    const onSelectSort = React.useCallback(
        (index) => {
            dispatch(setSortBy(index))
        },
        [],
    )

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                activeCategory={category} 
                onClickCategory={onSelectCategory} 
                items={categoryNames} 
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType}
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => <PizzaBlock {...obj} key={obj.id} isLoading={true} />)
                    : Array(12)
                          .fill(0)
                          .map((_, index) => <MyLoader key={index} />)}
            </div>
        </div>
    )
}
