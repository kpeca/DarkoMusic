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

export default function PlaylistForm() {
	const { addPlaylist } = useDataContext();
	return (
		<ScrollView
			style={{
				flex: 1,
				width: '100%',
				margin: 10
			}}
		>
			<Formik
				initialValues={{
					name: ''
				}}
				onSubmit={values => {
					addPlaylist(values);
				}}
			>
				{props => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder='Name'
							onChangeText={props.handleChange('name')}
							value={props.values.name}
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
