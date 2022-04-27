import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styles from './Prato.module.scss'

import items from 'data/cardapio.json'
import { ReactComponent as NotFoundImage } from 'assets/images/not_found.svg'
import Tags from 'components/Tags'
import NotFound from 'pages/NotFound'
import DefaultPage from 'components/DefaultPage'


export default function Prato() {
	const { id } = useParams()
	const { state } = useLocation()
	const item = items.find(item => item.id === Number(id))
	console.log(state)

	const navigate = useNavigate()

	function goBack() {
		navigate(-1)
	}

	if (!item) {
		return (
			<NotFound />
		)
	}

	return (
		<DefaultPage>
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

							<Tags {...item } />
						</div>
					</>
				) : (
					<NotFoundImage />
				)}
			</section>
		</DefaultPage>

	)
}
