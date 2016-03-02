'use strict';

var React = require('react-native'),
    TabBar = require('../components/tabbar'),
    SpotLight = require('../components/spotlight'),
    Filters = require('./filters');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} = React;

var Root = React.createClass({
  
 render: function(){
   return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
         <TabBar />
      </View>
    </View>

   );
 }
})

var styles = StyleSheet.create({
 mainContainer: {
  flex: 1,
  justifyContent: 'center',
 },
 container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});



module.exports = Root;