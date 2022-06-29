import React, { useContext, useState } from 'react';

const DataContext = React.createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
	const [songs, setSongs] = useState([
		{ id: 1, author: 'Pera Peric', title: 'Prva pesma', playlistID: '1' },
		{ id: 2, author: 'Pera Peric', title: 'Druga pesma', playlistID: '1' },
		{ id: 3, author: 'Pera Peric', title: 'Treca pesma', playlistID: '1' },
		{ id: 4, author: 'Pera Peric', title: 'Cetvrta pesma', playlistID: '2' },
		{ id: 5, author: 'Pera Peric', title: 'Peta pesma', playlistID: '2' },
		{ id: 6, author: 'Pera Peric', title: 'Sesta pesma', playlistID: '2' },
		{
			id: 7,
			author: 'Pera Peric',
			title: 'Sedma pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 8,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 9,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 10,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 11,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 12,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 13,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 14,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 15,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 16,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 17,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 18,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 19,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 20,
			author: 'Pera Peric',
			title: 'Osmda pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		},
		{
			id: 21,
			author: 'Pera Peric',
			title: 'Deveta pesma',
			tekst:
				'Ne pitajte gde sam bio    ni sam sebi ne bih priznao  da jos jednu noc sam pijan  pod prozorom njenim zaspao',
			playlistID: '3'
		}
	]);
	const [playlists, setPlaylists] = useState([
		{
			id: '1',
			name: 'plejlista1'
		},
		{
			id: '2',
			name: 'plejlista2'
		},
		{
			id: '3',
			name: 'plejlista3'
		}
	]);
	const [modal, setModal] = useState(false);

	function addSong(song, playlistID) {
		// console.log('playlistID :', playlistID);
		// return;
		song.id = songs.length + 1;
		song.playlistID = playlistID;
		console.log('daj mi song :', song);
		setSongs(currentState => {
			return [...currentState, song];
		});
		setModal(false);
	}

	function addPlaylist(playlist) {
		playlist.id = playlists.length + 1;
		setPlaylists(currentState => {
			return [...currentState, playlist];
		});
		setModal(false);
	}

	function openModal() {
		console.log('Opened modal');
		setModal(true);
	}
	function closeModal() {
		setModal(false);
	}

	let value = {
		addSong,
		addPlaylist,
		openModal,
		closeModal,
		modal,
		songs,
		playlists
	};
	// let value = {};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
