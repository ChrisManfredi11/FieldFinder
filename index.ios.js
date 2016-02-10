'use strict';

var React = require('react-native'),
    Login = require('./app/components/login'),
    SpotLight = require('./app/components/spotlight'),
    Favorites = require('./app/components/favorites'),
    Account = require('./app/components/myaccount');

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
    );
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FieldFinder', () => FieldFinder);
