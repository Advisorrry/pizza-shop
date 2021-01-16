import React from 'react'
import '../scss/app.scss'
import { Categories, SortPopup, PizzaBlock } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'
import { setSortBy } from './../redux/actions/filters'


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)

    const onSelectCategory = React.useCallback(index => {
        dispatch(setCategory(index))
    }, [])
    const onSelectSort = React.useCallback(index => {
        dispatch(setSortBy(index))
    }, [])
    

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categoryNames} />
                <SortPopup
                    onClickItem={onSelectSort}
                    items={[
                        { name: 'популярности', type: 'popular' },
                        { name: 'цене', type: 'price' },
                        { name: 'алфавиту', type: 'alphabet' },
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((obj) => (
                    <PizzaBlock {...obj} key={obj.id} />
                ))}
            </div>
        </div>
    )
}
