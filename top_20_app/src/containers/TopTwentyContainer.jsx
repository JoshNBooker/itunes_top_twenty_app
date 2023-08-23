import React, { useEffect, useState } from 'react';

const TopTwentyContainer = () => {
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
			<ol>
				{topTwenty.map((song, index) => (
					<li key={index}>
						<b>
							<p>{song['im:name'].label}</p>
						</b>
						<p>{song['im:artist'].label}</p>
						<img src={song['im:image'][0].label} height={100} />
					</li>
				))}
			</ol>
		</>
	);
};

export default TopTwentyContainer;
