
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './src/assets/color/Colors'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, } from 'react-navigation-tabs';
import HomeScreen from './src/screen/home/Home'
import SettingScreen from './src/screen/setting/Setting'
import DraftScreen from './src/screen/drafts/Drafts'
const MainApp = createBottomTabNavigator(
  {
    Setting: SettingScreen,
    Home: HomeScreen,
    Draft: DraftScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Setting') {
          iconName = 'cog';
          IconComponent = Icon;
        } else if (routeName === 'Draft') {
          iconName = "comment";
        }
        else if (routeName === 'Home') {
          iconName = 'home';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor:Colors.white,
      inactiveTintColor:Colors.white,
      
     style:{
       backgroundColor:'#3546A0',
       borderTopWidth: 0,
     },
    
    },
  },

);
export default createAppContainer(MainApp);





