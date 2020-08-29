import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import Profile from '../pages/Profile';

import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Profile" component={Profile}/>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;