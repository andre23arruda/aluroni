import Item from './Item'

import styles from './Items.module.scss'
import items from './items.json'
import { useState } from 'react'
import { useEffect } from 'react'

interface ItemsProps {
	selectedFilter: number | null,
	selectedSort: string,
	search: string
}

type TypeCategories = {
    [key: string]: string,
}

const categoriesSort: TypeCategories = {
	porcao: 'size',
	qtd_pessoas: 'serving',
	preco: 'price',
}


export default function Items({selectedFilter, selectedSort, search}: ItemsProps) {

	const [filteredItems, setFilteredItems] = useState(items)

	useEffect(() => {
		let currentItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
		setFilteredItems(selectedFilter ? currentItems.filter(item => item.category.id === selectedFilter) : currentItems)
	}, [selectedFilter, selectedSort, search])

	if (selectedSort) {
		filteredItems.sort((n1: any, n2: any) => n1[categoriesSort[selectedSort]] - n2[categoriesSort[selectedSort]])
	}

	return (
		<div className={ styles.items }>
			{ filteredItems.map(item => (
				<Item
					key={ item.id }
					{...item}
				/>
			))}
		</div>
	)
}
