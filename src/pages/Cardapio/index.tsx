import { useState } from 'react'

import Search from './Search'

import styles from './Cardapio.module.scss'
// import logo from 'assets/images/logo.svg'
import Filters from './Filters'
import Sorter from './Sorter'
import Items from './Items'

import Menu from 'components/Menu'

export default function Cardapio() {
	const [search, setSearch] = useState('')
	const [selectedFilter, setSelectedFilter] = useState<number | null>(null)
	const [selectedSort, setSelectedSort] = useState('')

	return (
		<main>
			<Menu />

			<header className={ styles.header }>
				<div className={ styles.text }>
					A casa do código e da massa
				</div>
			</header>

			<section>
				<h3 className={ styles.title }>Cardárpio</h3>

				<Search
					search={ search }
					setSearch={ setSearch }
				/>

				<div className={ styles.filtersContainer }>
					<Filters
						selectedFilter={ selectedFilter }
						setSelectedFilter={ setSelectedFilter }
					/>

					<Sorter
						selectedSort={ selectedSort }
						setSelectedSort={ setSelectedSort }
					/>
				</div>

				<Items
					selectedFilter={ selectedFilter }
					selectedSort={ selectedSort }
					search={ search }
				/>
			</section>
		</main>
	)
}
