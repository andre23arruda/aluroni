import styles from './Cardapio.module.scss'
// import logo from 'assets/images/logo.svg'
import { ReactComponent as Logo} from 'assets/images/logo.svg'

export default function Cardapio() {
	return (
		<main>
			<nav className={ styles.menu }>
				{/* <img src={ logo } alt="Aluroni" /> */}
				<Logo />
			</nav>

			<header className={ styles.header }>
				<div className={ styles.text }>
					A casa do código e da massa
				</div>
			</header>
		</main>
	)
}
