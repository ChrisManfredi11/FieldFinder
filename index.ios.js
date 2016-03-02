'use strict';

var React = require('react-native'),
    Login = require('./app/views/login'),
    SpotLight = require('./app/views/spotlight'),
    Favorites = require('./app/views/favorites'),
    Account = require('./app/views/myaccount'),
    Filters = require('./app/views/filters');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  Component,
} = React;

class FieldFinder extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.bodyContainer}
        initialRoute={{
          title: 'Login',
          component: Login
      }}/>
    )
  }
};

var styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#252525',
  },
  mainContainer: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FieldFinder', () => FieldFinder);
