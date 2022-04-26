import styles from './Item.module.scss'
import items from 'data/cardapio.json'
import classNames from 'classnames'

type ItemProps = typeof items[0]

export default function Item(props: ItemProps) {
	const { category, description, photo, price, serving, size, title } = props
	return (
		<div className={ styles.item }>
			<div className={ styles.imgContainer }>
				<img src={ photo } alt={ title } title={ title }/>
			</div>

			<div className={ styles.description }>
				<div className={ styles.title }>
					<h2>{ title }</h2>
					<p>{ description }</p>
				</div>

				<div className={ styles.tags }>
					<div className={classNames({
						[styles.type]: true,
						[styles[category.label.toLowerCase()]]: true,
					})}>
						{ category.label }
					</div>

					<div className={ styles.portion }>
						{ size }g
					</div>

					<div className={ styles.people }>
						Serve { serving } pessoa{ serving > 1 ? 's' : '' }
					</div>

					<div className={ styles.price }>
						R${ price.toFixed(2) }
					</div>
				</div>

			</div>
		</div>
	)
}
