import './List_music.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const List_music = ({ img, name, singer, customSong, index }) => {
	return (
		<div
			className="song"
			onClick={() => {
				customSong(index);
			}}
		>
			<div className="thumb">
				<img className="thumb_img" src={img} alt={name} />
			</div>
			<div className="body">
				<h3 className="title">{name}</h3>
				<p className="author">{singer}</p>
			</div>
			<div className="option">
				<i className="fas fa-ellipsis-h" />
			</div>
		</div>
	);
};

export default List_music;
