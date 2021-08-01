import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useRef, useState } from 'react';
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
	const inputEl = useRef();
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		if (isPlaying) {
			audioEl.current.play();
		} else {
			audioEl.current.pause();
		}

		let time = (audioEl.current.duration / 100) * currentTime;
		time && (audioEl.current.currentTime = time);
	}, [currentTime, isPlaying]);

	const onTimeChange = (e) => {
		const time = (e.target.currentTime / e.target.duration) * 100;
		time &&
			(inputEl.current.value =
				(e.target.currentTime / e.target.duration) * 100);
	};

	const onChange = (e) => {
		setCurrentTime(e.target.value);
	};

	return (
		<>
			<div className="control">
				<div className="btn btn-repeat">
					<i className="fas fa-redo"></i>
				</div>
				<div className="btn btn-prev" onClick={prevSong}>
					<i className="fas fa-step-backward"></i>
				</div>
				<div className="btn btn-toggle-play" onClick={togglePlay}>
					{isPlaying ? (
						<i className="fas fa-pause icon-pause" />
					) : (
						<i className="fas fa-play icon-play" />
					)}
				</div>
				<div className="btn btn-next" onClick={nextSong}>
					<i className="fas fa-step-forward" />
				</div>
				<div className="btn btn-random" onClick={randomSong}>
					<i className="fas fa-random" />
				</div>

				<audio id="audio" src={src} ref={audioEl} onTimeUpdate={onTimeChange} />
			</div>
			<input
				id="progress"
				className="progress"
				type="range"
				defaultValue={0}
				step="{1}"
				min="{0}"
				max="{100}"
				ref={inputEl}
				onChange={onChange}
			/>
		</>
	);
};

export default Control;
