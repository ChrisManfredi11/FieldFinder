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

class Root extends React.Component{
   constructor(props){
    super(props);
    this.state = {
      sport: this.props.sport,
    }
  }

  
 render(){
   return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
         <TabBar sport={this.state.sport} />
      </View>
    </View>

   );
 }
}

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