import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [topTwenty, setTopTwenty] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState('');

	useEffect(() => {
		fetch(selectedGenre)
			.then((res) => res.json())
			.then((data) => setTopTwenty(data.feed.entry));
	}, [selectedGenre]);

	const handleGenreChange = (e) => {
		const genreUrl = e.target.value;
		setSelectedGenre(genreUrl);
	};

	return (
		<>
			<h1>Top 20 for All Genres:</h1>
			<h2>See alternate Top 20s</h2>
			<select
				name="genres"
				id="genreDropdown"
				onChange={handleGenreChange}
			>
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
			<ol>
				{topTwenty.map((song, index) => (
					<li key={index}>
						<h3>{song['im:name'].label}</h3>
						<h4>{song['im:artist'].label}</h4>
					</li>
				))}
			</ol>
		</>
	);
}

export default App;
