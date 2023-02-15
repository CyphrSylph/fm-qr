import React from 'react';
import qrImg from './assets/image-qr-code.png';
import laptop from './assets/laptop.png';
import './App.css';

function App() {
  	return (
		<div className="App">
			<div className="qr__card">
				<img src={qrImg} alt="QR Code" className="qr__img" />
				<div className="qr__content">					
					<h2 className="qr__title">Improve your front-end skills by building projects</h2>
					<p className="qr__description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
				</div>
			</div>
			<div class="attribution">
				<img src={laptop} alt="Laptop Icon" className="attribution__icon" />
				<p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>, Crafted by <a href="https://github.com/kmaalig">Cyphr Sylph</a></p>
			</div>
		</div>
	);
}

export default App;
