import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useRef } from 'react';
import './Control.css';

const Control = ({
	prevSong,
	nextSong,
	randomSong,
	togglePlay,
	src,
	isPlaying,
}) => {
	const audioEl = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			audioEl.current.play();
		} else {
			audioEl.current.pause();
		}
	});

	return (
		<div className="control">
			<div className="btn btn-repeat">
				<i className="fas fa-redo"></i>
			</div>
			<div className="btn btn-prev" onClick={prevSong}>
				<i className="fas fa-step-backward"></i>
			</div>
			<div className="btn btn-toggle-play" onClick={togglePlay}>
				<i className="fas fa-pause icon-pause" />
				<i className="fas fa-play icon-play" />
			</div>
			<div className="btn btn-next" onClick={nextSong}>
				<i className="fas fa-step-forward" />
			</div>
			<div className="btn btn-random" onClick={randomSong}>
				<i className="fas fa-random" />
			</div>

			<audio id="audio" src={src} ref={audioEl} />
		</div>
	);
};

export default Control;
