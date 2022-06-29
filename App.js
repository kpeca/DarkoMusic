import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Songs from './screens/songs';
import SongDetail from './screens/songDetail';
import { DataProvider } from './context/DataContext';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<DataProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Songs' component={Songs} />
					<Stack.Screen name='SongDetail' component={SongDetail} />
				</Stack.Navigator>
			</NavigationContainer>
		</DataProvider>
	);
}

export default App;
