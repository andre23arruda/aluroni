import styles from './DefaultPage.module.scss'
import { Outlet } from 'react-router-dom'

export default function DefaultPage() {
	return (
		<>
			<header className={ styles.header }>
				<div className={ styles.text }>
					A casa do código e da massa
				</div>
			</header>

			<Outlet />
		</>
	)
}
