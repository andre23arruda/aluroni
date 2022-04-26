import items from 'data/cardapio.json'
import theme from 'assets/styles/Theme.module.scss'
import styles from './Home.module.scss'


export default function Home() {
	let suggested = [...items].sort(() => 0.5 - Math.random()).splice(0,3)

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

						<button>
							Ver mais
						</button>
					</div>
				))}

			</div>
		</section>
	)
}
