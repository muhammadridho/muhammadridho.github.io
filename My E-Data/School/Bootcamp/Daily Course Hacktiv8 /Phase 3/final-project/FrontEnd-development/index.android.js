/**
 * Android Main Application
 */
import { StackNavigator } from 'react-navigation'
import Main from './src/Main'
import LoginScene from './src/LoginScene'
import RegisterScene from './src/components/forms/Register'
import AfterCheckoutScene from './src/AfterCheckoutScene'
import ProfileScene from './src/ProfileScene'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

const client = StackNavigator({
  MainContent : {screen : Main},
  StartedContent : {screen : AfterCheckoutScene},
  LoginContent : {screen : LoginScene},
  AfterCheckoutContent : {screen : AfterCheckoutScene},
  ProfileContent : {screen : ProfileScene}
}, {
  headerMode : 'none'
})

AppRegistry.registerComponent('client', () => client);
