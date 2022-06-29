import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: 'blue'
	},
	titleText: {
		fontSize: 24,
		color: '#333',
		fontWeight: 'bold',
		marginBottom: 50
	},
	paragraph: {
		marginVertical: 8,
		lineHeight: 20
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 10,
		fontSize: 18,
		marginHorizontal: 10,
		marginVertical: 5,
		borderRadius: 6
	}
});
