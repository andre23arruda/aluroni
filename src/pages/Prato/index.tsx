import styles from './Prato.module.scss'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import classNames from 'classnames'

import items from 'data/cardapio.json'
import { ReactComponent as NotFoundImage } from 'assets/images/not_found.svg'


export default function Prato() {
	const { id } = useParams()
	const { state } = useLocation()
	// const { item } = state as { item: typeof items[0] }
	const item = items.find(item => item.id === Number(id))
	console.log(state)

	const navigate = useNavigate()

	function goBack() {
		navigate(-1)
	}

	return (
		<section className={ styles.container }>
			<button onClick={ goBack } className={ styles.back }>
				{ '< Voltar' }
			</button>

			{ item ? (
				<>
					<h1 className={ styles.title }>
						{ item.title }
					</h1>

					<div className={ styles.imageContainer }>
						<img src={ item.photo } alt={ item.title } />
					</div>

					<div className={ styles.content }>
						<p className={ styles.description }>
							{ item.description }
						</p>

						<div className={ styles.tags }>
							<div className={classNames({
								[styles.type]: true,
								[styles[item.category.label.toLowerCase()]]: true,
							})}>
								{ item.category.label }
							</div>

							<div className={ styles.portion }>
								{ item.size }g
							</div>

							<div className={ styles.people }>
								Serve { item.serving } pessoa{ item.serving > 1 ? 's' : '' }
							</div>

							<div className={ styles.price }>
								R${ item.price.toFixed(2) }
							</div>
						</div>
					</div>
				</>
			) : (
				<NotFoundImage />
			)}
		</section>

	)
}
