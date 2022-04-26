import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from 'assets/images/logo.svg'
import styles from './Menu.module.scss'

const routes = [
	{ label: 'Início', to: '/'},
	{ label: 'Cardárpio', to: '/cardapio'},
	{ label: 'Sobre', to: '/sobre'},
]

export default function Menu() {
	return (
		<nav className={ styles.menu }>
			<Logo />

			<ul>
				{ routes.map(route => (
					<li key={ route.label }>
						<Link to={ route.to }>
							{ route.label }
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)}
