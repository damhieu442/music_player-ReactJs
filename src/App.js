import { useState } from 'react';
import './App.css';
import Cd from './components/Cd';
import Control from './components/Control';
import Header from './components/Header';
import Playlist from './components/Playlist';
// import Progress from './components/Progress';
import './components/Progress';

const App = () => {
	const [songs] = useState([
		{
			name: 'Chill – sakura Hz',
			singer: 'Vicetoe',
			path: './sakura-chill.mp3',
			image:
				'https://i.ytimg.com/vi/pF2tXC1pXNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApqigFCCU_DU45tK1_7psyd9WkzA',
		},
		{
			name: 'No chat',
			singer: 'Ethan anh ban Moi',
			path: './ethanChat.mp3',
			image:
				'https://i.ytimg.com/vi/MqvduK1yaZA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3UKwavzg0BJVt8zTE6xY0kX1z0A',
		},
		{
			name: 'Nevada2',
			singer: 'Vicetoe',
			path: './Nevada.mp3',
			image:
				'https://avatar-ex-swe.nixcdn.com/playlist/2016/10/21/0/b/9/8/1477048459663.jpg',
		},
	]);
	const [currentSong, setCurrentSong] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const nextSong = () => {
		setCurrentSong((state) =>
			// Check next song is available
			state < songs.length - 1 ? (state += 1) : (state = 0)
		);
		setIsPlaying(true);
	};
	const prevSong = () => {
		// Check previous song is available
		setCurrentSong((state) =>
			state > 0 ? (state -= 1) : (state = songs.length - 1)
		);
		setIsPlaying(true);
	};

	const randomSong = () => {
		setCurrentSong(Math.floor(Math.random() * songs.length));
		setIsPlaying(true);
	};

	const customSong = (custom) => {
		setCurrentSong(custom);
		setIsPlaying(true);
	};

	const togglePlay = () => {
		setIsPlaying((state) => !state);
	};

	return (
		<div className="player">
			<div className="dashboard">
				<Header name={songs[currentSong].name} />

				<Cd src={songs[currentSong].image} />

				<Control
					nextSong={nextSong}
					prevSong={prevSong}
					randomSong={randomSong}
					togglePlay={togglePlay}
					src={songs[currentSong].path}
					isPlaying={isPlaying}
				/>
			</div>

			<Playlist list={songs} customSong={customSong} />
		</div>
	);
};

export default App;
