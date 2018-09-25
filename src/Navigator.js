import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import CargaEstado from './screens/CargaEstado';

const AppMainTab = createBottomTabNavigator({
  "Cargar": {
    screen: CargaEstado,
    navigationOptions: ({navigation}) => ({
      title: 'Train',
      tabBarIcon: ({  focused }) => (
        <Ionicons name={'ios-train-outline'} size={30}  style={{paddingTop: 0}}/>
      ),
    }),
  },

}, {
  headerMode: 'none', 
  tabBarOptions: {
 
    showIcon: true,   // Should the icons show on the tab bar?
    showLabel: true,  // Should the label show on the tab bar?
  
    style: {  //  Tab bar styling
      borderTopWidth: 1,
      marginTop: 10,
      height: 55
    },
    upperCaseLabel: true  //  Should the tab bar labels be in CAPITALS?
  },
  tabBarPosition: 'bottom', // Where should our tabs be located?
  swipeEnabled: true, //  Swipe to nav between tabs? This won't work unless you're using `createMaterialTopTabNavigator` or `createMaterialBottomTabNavigator`
  animationEnabled: true, // Should swipe between tabs be animated? See note above.
  backBehavior: "initialRoute", // Where should you be taken when navigating with 'OS' back button?
  lazy: false // Should tab screens be lazy loaded?
});

const AppMainStack = createStackNavigator({
  Home: {
    screen: AppMainTab,
    navigationOptions: ({ navigation }) =>  ({
      title: "Panther",
      swipeEnabled: true,
      header: null,
      headerStyle: {
      },
      headerTitleStyle: {
   
      },
      cardStyle: {
      }
    }),
  },
}, {
  cardStyle: {
  },
  mode: 'modal',
});


const Navigator = createBottomTabNavigator({
  Main: { screen: AppMainStack },
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarVisible: false,
    header: null,
    headerMode: 'none'
  },
  swipeEnabled: true
});

export default Navigator;