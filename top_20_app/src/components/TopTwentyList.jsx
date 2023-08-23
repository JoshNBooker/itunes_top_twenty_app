import React from 'react';

const TopTwentyList = ({ song, index }) => {
	return (
		<>
			<li key={index}>
				<b>
					<p>{song['im:name'].label}</p>
				</b>
				<p>{song['im:artist'].label}</p>
				<img src={song['im:image'][0].label} height={100} />
			</li>
		</>
	);
};

export default TopTwentyList;
