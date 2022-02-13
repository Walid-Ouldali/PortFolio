import './topbar.scss';
import { Person, Mail, LinkedIn, GitHub } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={'topbar ' + (menuOpen && 'active')}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						Portfolio
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>07 57 47 19 94</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>ouldali02@hotmail.fr</span>
					</div>
					<div className="itemContainer">
						<LinkedIn className="icon" />
						<a href="https://www.linkedin.com/in/walid-ould-ali-b79411200">
							<span> Walid Ould Ali</span>
						</a>
					</div>
					<div className="itemContainer">
						<GitHub className="icon" />
						<a href="https://github.com/Walid-Ouldali?tab=repositories">
							<span> Walid-Ouldali</span>
						</a>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1" />
						<span className="line2" />
						<span className="line3" />
					</div>
				</div>
			</div>
		</div>
	);
}
