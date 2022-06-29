import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	TouchableOpacity,
	Modal
} from 'react-native';
// import { Modal } from 'react-native-web';
import { songsData } from '../data/data';
import { MaterialIcons } from '@expo/vector-icons';
import SongForm from './songForm';
import { useDataContext } from '../context/DataContext';
import PlaylistForm from './playlistForm';

export default function Songs({ navigation, route }) {
	const { songs, addSong, modal, openModal, closeModal } = useDataContext();

	console.log('DAJ MI PESME :', songs);
	// const [modalOpen, setModalOpen] = useState(false);
	// const [songs, setSongs] = useState(songsData);
	const { playlist } = route.params;
	// console.log(playlist);
	// console.log(songs);

	const data = songs.filter(song => song.playlistID === playlist.id);

	// const addSong = song => {
	// 	song.id = songs.length + 1;

	// 	console.log('daj mi song :', song);
	// 	setSongs(currentState => {
	// 		return [song, ...currentState];
	// 	});
	// 	setModalOpen(false);
	// };

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.card}
			onPress={() => navigation.navigate('SongDetail', { song: item })}
		>
			<View style={styles.card}>
				<Text>
					{item.author} - {item.title}
				</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
				{playlist.name}
			</Text>

			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
			<MaterialIcons
				name='add'
				size={24}
				style={styles.modalToggle}
				onPress={() => openModal()}
			/>
			<Modal visible={modal} animationType='slide'>
				<View style={styles.container}>
					<MaterialIcons
						name='close'
						size={24}
						style={{ ...styles.modalToggle, ...styles.modalClose }}
						onPress={() => closeModal()}
					/>
					<SongForm playlistID={playlist.id} />
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
		flex: 1,
		alignItems: 'center'
		// backgroundColor: 'yellow'
	},
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 50,
		backgroundColor: 'red',
		marginVertical: 10,
		borderRadius: 10
	},

	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
		backgroundColor: 'red'
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0
	}
});
