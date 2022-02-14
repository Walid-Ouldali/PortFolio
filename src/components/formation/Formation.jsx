import { useState } from 'react';
import './Formation.scss';
import ptp from '../../images/ptp.png';
export default function Formation() {
	const [ currentSlide, setCurrentSlide ] = useState(0);
	const data = [
		{
			id: '1',
			icon: './assets/mobile.png',
			title: 'baccalaureate in mathematics',
			desc: 'Bac Math Mension bien, 2019 Tizi Ouzou Algerie. ',
			img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.midiazot.fr%2Fwp-content%2Fuploads%2F2018%2F07%2FIMGBN44639bac-laureats.jpg&f=1&nofb=1"
		},
		{
			id: '2',
			icon: './assets/globe.png',
			title: '1st year in electronic and electric ingineering',
			desc: 'L1 en genie electrique et electronique à Boumerdes 2019-2020 ',
			img:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.algerie-eco.com%2Fwp-content%2Fuploads%2F2017%2F01%2FUniversit%25C3%25A9-M%25E2%2580%2599Hamed-Bougara-de-Boumerdes.png&f=1&nofb=1'
		},
		{
			id: '3',
			icon: './assets/globe.png',
			title: 'Dut Informatique',
			desc: 'Dut Inforatique à Villetaneuse Sorbonne Paris Nord, 2020-2022',
			img:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.univ-paris13.fr%2Fwp-content%2Fuploads%2FFONDATION292x240-BU.jpg&f=1&nofb=1'
		}
	];
       
	const handleClick = (way) => {
		way === 'left'
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
	};

	return (
		<div className="formation" id="works">
			<h1>Studies</h1>
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
