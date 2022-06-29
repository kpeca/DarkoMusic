import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	FlatList,
	Modal
} from 'react-native';
import { globalStyles } from '../styles/global';
// import { playlists } from '../data/data';
import { MaterialIcons } from '@expo/vector-icons';
import { useDataContext } from '../context/DataContext';
import PlaylistForm from './playlistForm';

export default function Home({ navigation }) {
	// console.log(playlists);
	const { modal, openModal, closeModal, playlists } = useDataContext();

	console.log(playlists);
	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.card}
			onPress={() => navigation.navigate('Songs', { playlist: item })}
		>
			<View style={styles.card}>
				<Text>{item.name}</Text>
			</View>
		</TouchableOpacity>
	);
	return (
		<View style={styles.container}>
			<Text style={globalStyles.titleText}>PLEJLISTE</Text>

			<FlatList
				data={playlists}
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
					<PlaylistForm />
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
		flex: 1,
		alignItems: 'center',
		// justifyContent: 'center',
		backgroundColor: 'yellow'
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
	}
});
