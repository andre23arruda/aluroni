import styles from './Item.module.scss'
import logo from 'assets/images/logo.svg'


export default function Item() {
	return (
		<div className={ styles.item }>
			<div className={ styles.imgContainer }>
				<img src={ logo } alt="imagem" />
			</div>

			<div className={ styles.description }>
				<div className={ styles.title }>
					<h2>Macarrão</h2>
					<p>Descrição do macarrão</p>
				</div>

				<div className={ styles.tags }>
					<div className={ styles.type }>
						Massa
					</div>

					<div className={ styles.portion }>
						400g
					</div>

					<div className={ styles.people }>
						2 pessoas
					</div>

					<div className={ styles.price }>
						R$40,00
					</div>

				</div>

			</div>
		</div>
	)
}
