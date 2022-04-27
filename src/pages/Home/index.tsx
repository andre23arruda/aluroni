import items from 'data/cardapio.json'
import theme from 'assets/styles/Theme.module.scss'
import styles from './Home.module.scss'

import homeImage from 'assets/images/nossa_casa.png'

import { useNavigate } from 'react-router-dom'
import { Prato } from 'types/Pratos'


export default function Home() {
	let suggested = [...items].sort(() => 0.5 - Math.random()).splice(0,3)

	const navigate = useNavigate()

	function redirectToDetail(item: Prato){
		navigate(`prato/${ item.id }`, { state: { item }})
	}

	return (
		<section>
			<h3 className={ theme.title }>
				Recomendações da cozinha
			</h3>

			<div className={ styles.suggestedGroup }>
				{ suggested.map(item => (
					<div className={ styles.suggested } key={ item.id }>
						<div className={ styles.imageContainer }>
							<img
								src={ item.photo }
								alt={ item.title }
								title={ item.title }
							/>
						</div>

						<button onClick={ () => redirectToDetail(item) }>
							Ver mais
						</button>
					</div>
				))}
			</div>

			<h3 className={ theme.title }>
				Nossa casa
			</h3>

			<div className={ styles.locationContainer }>
				<img src={ homeImage } alt="Nossa casa" />

				<div className={ styles.adress }>
					Rua Vergueiro, 3185
					<br />
					<br />
					Vila Mariana - SP
				</div>
			</div>
		</section>
	)
}
