/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoadingScreen from './AuthLoadingScreen';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
