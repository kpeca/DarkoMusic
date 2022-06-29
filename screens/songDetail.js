import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-web';

export default function SongDetail({ navigation, route }) {
	const { song } = route.params;

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
			<Text style={{ fontSize: 24 }}>
				{song.author} - {song.title}
			</Text>
			<Text style={{ fontSize: 20, marginHorizontal: 15, marginTop: 20 }}>
				{song.tekst}
			</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24
		// alignItems: 'center'
		// backgroundColor: 'red'
	}
});
