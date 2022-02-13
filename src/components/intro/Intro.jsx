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
			strings: [ 'Student', 'Fullstack Developper', 'Future cyber security engineer' ]
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quis! Quod minus
							asperiores expedita modi a sunt qui, voluptate vero laboriosam voluptatibus deserunt
							distinctio sequi labore optio dolore ducimus blanditiis. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Eveniet, quis! Quod minus asperiores expedita modi a sunt qui,
							voluptate vero laboriosam voluptatibus deserunt distinctio sequi labore optio dolore ducimus
							blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quis! Quod
							consectetur adipisicing elit. Eveniet, quis! Quod minus asperiores expedita modi a sunt qui,
							voluptate vero laboriosam voluptatibus deserunt distinctio sequi labore optio dolore ducimus
							blanditiis.
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
