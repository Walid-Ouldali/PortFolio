import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: [ 'Student', 'Fullstack Developper', 'Future Software engineer' ]
		});
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/profil.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>Walid Ould Ali</h1>
					<h3>
						<span ref={textRef} />
					</h3>
					<br />
					<div className="presentation">
						<p>
							Motivé et passionné par l'informatique depuis mon plus jeune âge, curieux d'en apprendre
							toujours plus sur les dernières technologies. Je passe une partie de mon temps libre à
							monter en compétences à travers divers projets que ce soit professionnels, personnels ou
							universitaires. Actuellement Full stack web developer en alternance je souhaite continuer
							mes études dans une école d'ingénieur pour devenir Ingénieur Logiciel Afin de démontrer
							certaines compétences, notamment en développement Web (HTML, CSS , Javascript et ReactJS).
							Je me suis lancé dans la réalisation de ce Portfolio et dans d'autres projets listés
							ci-dessous.
						</p>
					</div>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt="" />
				</a>
			</div>
		</div>
	);
}
