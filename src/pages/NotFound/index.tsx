import { useNavigate } from 'react-router-dom'

import theme from 'assets/styles/Theme.module.scss'
import styles from './NotFound.module.scss'

import { ReactComponent as NotFoundImage } from 'assets/images/not_found.svg'
import classNames from 'classnames'

export default function NotFound() {

	const navigate = useNavigate()

	function goBack() {
		navigate(-1)
	}

	return (
		<section
			className={ classNames({
				[styles.container]: true,
				[theme.container]: true,
			})}
		>
			<div className={ styles.back }>
				<button onClick={ goBack }>
					{ '< Voltar' }
				</button>
			</div>

			<NotFoundImage />
		</section>
	)
}
