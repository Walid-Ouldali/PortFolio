import { useState } from 'react';
import './Formation.scss';
import ptp from '../../images/ptp.png';
export default function Formation() {
	const [ currentSlide, setCurrentSlide ] = useState(0);
	const data = [
		{
			id: '1',
			icon: './assets/mobile.png',
			title: 'Baccalauréat mathématique',
			desc: 'Bac Math Mention bien, 2019 Tizi Ouzou Algérie ',
			img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.midiazot.fr%2Fwp-content%2Fuploads%2F2018%2F07%2FIMGBN44639bac-laureats.jpg&f=1&nofb=1"
		},
		{
			id: '2',
			icon: './assets/globe.png',
			title: '1st year in electronic and electric ingineering',
			desc: 'L1 en génie électrique et électronique à Boumerdes 2019-2020',
			img:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.algerie-eco.com%2Fwp-content%2Fuploads%2F2017%2F01%2FUniversit%25C3%25A9-M%25E2%2580%2599Hamed-Bougara-de-Boumerdes.png&f=1&nofb=1'
		},
		{
			id: '3',
			icon: './assets/globe.png',
			title: 'Dut Informatique',
			desc: 'Dut Informatique à Villetaneuse Sorbonne Paris Nord, 2020-2022',
			img:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.univ-paris13.fr%2Fwp-content%2Fuploads%2FFONDATION292x240-BU.jpg&f=1&nofb=1'
		},
		{
			id: '4',
			icon: './assets/globe.png',
			title: 'Full Stack Developer',
			desc: 'Full stack web develoêr chez CEOS Tech. Novembre 2021.',
			img:
				'data:image/png;base64,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'
		}
	];
       
	const handleClick = (way) => {
		way === 'left'
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
	};

	return (
		<div className="formation" id="works">
			<h1>PARCOURS</h1>
			<div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{data.map((d) => (
					<div className="container">
						<div className="item">
							<div className="left">
								<div className="leftContainer">
									<div className="imgContainer">
										<img src={d.icon} alt="" />
									</div>
									<h2>{d.title}</h2>
									<p>{d.desc}</p>
									<span />
								</div>
							</div>
							<div className="right">
								 <img src={d.img} alt="" /> 
							</div>
						</div>
					</div>
				))}
			</div>
			<img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick('left')} />
			<img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
		</div>
	);
}
