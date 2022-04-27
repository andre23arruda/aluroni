import React from 'react'
import options from 'data/options.json'
import styles from './Filters.module.scss'
import classNames from 'classnames'
import { Option } from 'types/Pratos'

type FiltersProps = {
	selectedFilter: number | null,
	setSelectedFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ selectedFilter, setSelectedFilter }: FiltersProps) {

	function handleFilter(option: Option) {
		if (selectedFilter === option.id)
			return setSelectedFilter(null)
		return setSelectedFilter(option.id)
	}

	return (
		<div className={ styles.filters }>
			{options.map(option => (
				<button
					className={ classNames({
						[styles.active]: selectedFilter === option.id
					})}
					key={ option.id }
					onClick={ () => handleFilter(option) }
				>
					{ option.label }
				</button>
			))}
		</div>
	)
}
