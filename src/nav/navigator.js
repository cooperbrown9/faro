// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import { createStackNavigator, createAppContainer, createNavigator } from 'react-navigation';
import Home from '../components/Home';
import Detail from '../components/Detail';

const AppNavigator = createNavigator({
    Home: {
        screen: Home
    },
    Detail: {
        screen: Detail
    }
}, {
    initialRouteName: 'Home'
}, {})
    

export default createAppContainer(AppNavigator)

// const Stack = createStackNavigator()

// export default function Navigator() {
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name='Home' component={Home} />
//                 <Stack.Screen name='Detail' component={Detail} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }