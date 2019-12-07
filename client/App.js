



import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from './components/home' 

const MainNavigator = createStackNavigator({
  Home: {
    screen: home,
    navigationOptions: {
        header: null,
        gesturesEnabled: false,
    },
},
});

const App = createAppContainer(MainNavigator);

export default App;