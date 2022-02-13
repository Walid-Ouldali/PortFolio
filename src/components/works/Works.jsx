import { useState } from 'react';
import './works.scss';
import ptp from '../../images/ptp.png';
export default function Works() {
	const [ currentSlide, setCurrentSlide ] = useState(0);
	const data = [
		{
			id: '1',
			icon: './assets/mobile.png',
			title: 'Food Delivery Web Site',
			desc: 'A small web site project for an imaginary restaurant with delivery services ',
			img: ""
		},
		{
			id: '2',
			icon: './assets/globe.png',
			title: 'Chess project python ',
			desc: 'Recreating a simple chess game using only python language',
			img:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F2585c1c742042de7781976bf005ea81c41ee234f%2F687474703a2f2f692e696d6775722e636f6d2f417358686876432e706e67&f=1&nofb=1'
		},
		{
			id: '3',
			icon: './assets/globe.png',
			title: 'Java project python',
			desc: 'Recreating a more complexe chess game using Java language with all the rules and a better interface',
			img:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F2585c1c742042de7781976bf005ea81c41ee234f%2F687474703a2f2f692e696d6775722e636f6d2f417358686876432e706e67&f=1&nofb=1'
		}
	];

	const handleClick = (way) => {
		way === 'left'
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
	};

	return (
		<div className="works" id="works">
			<h1>Projets</h1>
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
								{d.img != "" ? <img src={d.img} alt="" /> : <img
                  src={ptp}
                  alt=""
                />}
								
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
