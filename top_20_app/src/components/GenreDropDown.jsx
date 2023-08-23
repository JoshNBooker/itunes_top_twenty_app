import TopTwentyList from './TopTwentyList';

const GenreDropDown = ({ handleGenreChange, topTwenty }) => {
	const songList = topTwenty.map((song, index) => (
		<TopTwentyList song={song} key={index} />
	));
	return (
		<>
			<h1>Top 20</h1>
			<h2>Choose your genre</h2>
			<select
				name="genres"
				id="genreDropdown"
				onChange={handleGenreChange}
			>
				<option value="https://itunes.apple.com/gb/rss/topsongs/limit=20/json">
					All Genres
				</option>
				<option value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json">
					Rock
				</option>
				<option value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json">
					Dance
				</option>
				<option value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json">
					Country
				</option>
			</select>
			<p>{topTwenty.length ? <ol>{songList}</ol> : 'Awaiting choice'}</p>
		</>
	);
};

export default GenreDropDown;
