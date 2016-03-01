'use strict';

var React = require('react-native'),
    TabBar = require('../components/tabbar'),
    SpotLight = require('../components/spotlight'),
    Filters = require('./filters');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  View,
} = React;

class Root extends Component{
  
 render(){
   return (
      <View style={styles.container}>
         <TabBar navigator={this.props.navigator} sport={this.props.sport}/>
      </View>

   );
 }
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});



module.exports = Root;