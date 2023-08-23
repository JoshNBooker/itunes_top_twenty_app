import React, { useEffect, useState } from 'react';
import GenreDropDown from '../components/GenreDropDown';

const TopTwentyContainer = () => {
	const [topTwenty, setTopTwenty] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState('');

	console.log(topTwenty);
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
			<GenreDropDown
				handleGenreChange={handleGenreChange}
				topTwenty={topTwenty}
			/>
		</>
	);
};

export default TopTwentyContainer;
