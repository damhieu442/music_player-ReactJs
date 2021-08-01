import './Playlist.css';
import ListMusic from './List_music';

const Playlist = ({ list, customSong }) => {
	return (
		<div className="playlist">
			{list.map((value, index) => {
				return (
					<ListMusic
						index={index}
						key={index}
						name={value.name}
						singer={value.singer}
						img={value.image}
						customSong={customSong}
					/>
				);
			})}
		</div>
	);
};

export default Playlist;
