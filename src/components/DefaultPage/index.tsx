import React from 'react'
import { Outlet } from 'react-router-dom'

import theme from 'assets/styles/Theme.module.scss'
import styles from './DefaultPage.module.scss'

export default function DefaultPage({ children }: { children?: React.ReactNode}) {
	return (
		<>
			<header className={ styles.header }>
					<div className={ styles.text }>
						A casa do código e da massa
					</div>
				</header>

			<div className={ theme.container }>
				<Outlet />

				{ children }
			</div>
		</>
	)
}
