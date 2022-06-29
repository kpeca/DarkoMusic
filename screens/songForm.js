import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	FlatList,
	processColor,
	TextInput,
	ScrollView
} from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import { useDataContext } from '../context/DataContext';

export default function SongForm({ playlistID }) {
	const { addSong } = useDataContext();
	return (
		<ScrollView
			style={{
				flex: 1,
				// flexDirection: 'column',
				// backgroundColor: 'blue',
				width: '100%',
				margin: 10
			}}
		>
			<Formik
				initialValues={{
					author: '',
					title: '',
					tekst: ''
				}}
				onSubmit={values => {
					addSong(values, playlistID);
				}}
			>
				{props => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder='Author'
							onChangeText={props.handleChange('author')}
							value={props.values.author}
						/>
						<TextInput
							style={globalStyles.input}
							placeholder='Title'
							onChangeText={props.handleChange('title')}
							value={props.values.title}
						/>
						<TextInput
							multiline
							style={globalStyles.input}
							placeholder='Text'
							onChangeText={props.handleChange('tekst')}
							value={props.values.tekst}
						/>
						<Button
							title='submit'
							color='maroon'
							onPress={props.handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</ScrollView>
	);
}
