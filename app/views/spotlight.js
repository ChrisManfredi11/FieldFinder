'use strict';

var React = require('react-native'),
    SpotLight = require('../components/spotlight'),
    Filters = require('./filters'),
    TabBar = require('../components/tabbar');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  NavigatorIOS,
  TouchableHighlight,
  TouchableOpacity,
  View,
} = React;

class SpotLightPage extends React.Component{

  //    Filters(){
  //   this.props.navigator.push({
  //     title: 'Filters',
  //     component: Filters,
  //     rightButtonTitle: 'Filters',
  //     passProps: {myElement: this.props.myElement, navigator: this.props.navigator},
  //     onRightButtonPress: () => {
  //     this.props.navigator.push({
  //       title: "Filters",
  //       component: Filters,
  //       rightButtonTitle: 'Cancel',
  //         passProps: {TabBar: TabBar, navigator: this.props.navigator},

  //       onRightButtonPress: () => {  this.props.navigator.pop(); }
  //     })}

  //   });
  // }
  
 render(){
   return (
      <View style={styles.container}>
         <SpotLight sport={this.props.sport} navigator={this.props.navigator}/>
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



module.exports = SpotLightPage;