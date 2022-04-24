import Item from './Item'

import styles from './Items.module.scss'
import items from './items.json'

export default function Items() {
	return (
		<div className={ styles.items }>
			{ items.map(item => (
				<Item
					key={ item.id }
					{...item}
				/>
			))}
		</div>
	)
}
