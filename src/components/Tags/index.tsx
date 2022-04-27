import classNames from 'classnames'
import { Prato } from 'types/Pratos'
import styles from './Tags.module.scss'

export default function Tags(item: Prato) {
	return (
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
	)
}
