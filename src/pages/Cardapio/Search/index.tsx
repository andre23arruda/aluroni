import React from 'react'

import styles from './Search.module.scss'


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
		</div>
	)
}
