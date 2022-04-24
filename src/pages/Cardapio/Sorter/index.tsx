import React, { useState } from 'react'

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import styles from './Sorter.module.scss'
import options from './options.json'
import classNames from 'classnames'

type SorterProps = {
	selectedSort: string,
	setSelectedSort: React.Dispatch<React.SetStateAction<string>>
}

export default function Sorter({selectedSort, setSelectedSort}: SorterProps) {

	const [show, setShow] = useState(false)
	const sorterName = options.find(option => option.value === selectedSort)?.nome

	return (
		<button
			className={ styles.sorter }
			onClick={ () => setShow(!show) }
			onBlur={ () => setShow(false) }
		>
			<span>{ sorterName || 'Ordernar por' }</span>

			{ show ? <MdKeyboardArrowUp size={ 20 } /> : <MdKeyboardArrowDown size={ 20 } /> }

			<div
				className={ classNames({
					[styles.options]: true,
					[styles.active]: show,
				})}
			>
				{ options.map(option => (
					<div
						key={ option.value }
						className={ styles.option }
						onClick={ () => setSelectedSort(option.value) }
					>
						{ option.nome }
					</div>
				))}
			</div>
		</button>
	)
}
