import styles from './Item.module.scss'
import { Prato } from 'types/Pratos'
import Tags from 'components/Tags'

import { useNavigate } from 'react-router-dom'


export default function Item(item: Prato) {
	const { description, photo, title } = item
	const navigate = useNavigate()

	function redirectToDetail(item: Prato){
		navigate(`/prato/${ item.id }`, { state: { item }})
	}

	return (
		<div
			className={ styles.item }
			onClick={ () => redirectToDetail(item) }
		>
			<div className={ styles.imgContainer }>
				<img src={ photo } alt={ title } title={ title }/>
			</div>

			<div className={ styles.description }>
				<div className={ styles.title }>
					<h2>{ title }</h2>
					<p>{ description }</p>
				</div>

				<Tags {...item}/>

			</div>
		</div>
	)
}
