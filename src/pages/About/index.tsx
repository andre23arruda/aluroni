import styles from './About.module.scss'
import theme from 'assets/styles/Theme.module.scss'

import casaImg from 'assets/images/casa.png'
import massa1Img from 'assets/images/massa1.png'
import massa2Img from 'assets/images/massa2.png'

const images = [massa1Img, massa2Img]

export default function About() {
	return (
		<section>
			<h3 className={ theme.title }>Sobre</h3>

			<div className={ styles.about }>
				<img src={ casaImg } alt="Casa Aluroni" />

				<div className={ styles.text }>
					<p>
						Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
					</p>

					<p>
						Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
					</p>

					<p>
						Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
					</p>
				</div>
			</div>

			<div className={ styles.imagesGroup }>
				{ images.map((image, index) => (
					<div className={ styles.imageContainer }>
						<img key={ index } src={ image } alt="Imagem de massa" />
					</div>
				))}
			</div>
		</section>
	)
}
