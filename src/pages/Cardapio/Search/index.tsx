import React from 'react'

import styles from './Search.module.scss'
import { CgSearch } from 'react-icons/cg'


interface SearchProps {
	search: string,
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({ search, setSearch }: SearchProps) {
	return (
		<div className={ styles.buscador }>
			<input
				value={ search }
				onChange={ e => setSearch(e.target.value) }
			/>

			<CgSearch size={ 20 } color="#4C4D5E" />
		</div>
	)
}
