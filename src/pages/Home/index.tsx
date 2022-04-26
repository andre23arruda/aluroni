import Menu from 'components/Menu';
import items from 'data/cardapio.json'
import styles from './Home.module.scss'


export default function Home() {
	let suggested = [...items].sort(() => 0.5 - Math.random()).splice(0,3);

	return (
		<section>
			<Menu />

			<h3 className={ styles.title }>
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
