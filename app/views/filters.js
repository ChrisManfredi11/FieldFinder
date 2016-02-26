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
  TextInput,
} = React;

class Filters extends Component{
  constructor(props){
    super(props);
    this.state = {
      usertype: '',
      isLoading: false,
      error: false
    }
  }

    handleChange(event){
    this.setState({
      usertype: event.nativeEvent.text
    })
  }
  handleSubmit(){
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    })

  }
  
 render(){
   return (
      <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={this.state.username}
        onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>

   )
 }
};

var styles = StyleSheet.create({
 container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252525',
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    height: 50,
    width: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});



module.exports = Filters;