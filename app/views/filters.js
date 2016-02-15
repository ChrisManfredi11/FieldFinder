'use strict';

var React = require('react-native'),
    TabBar = require('../components/tabbar'),
    SpotLight = require('../components/spotlight');

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

class Filters extends Component{
  
 render(){
   return (
      <View style={styles.container}>
         <Text> Filters Page </Text>
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



module.exports = Filters;