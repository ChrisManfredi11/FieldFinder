'use strict';

var React = require('react-native'),
    TabBar = require('../components/tabbar'),
    SpotLight = require('../components/spotlight'),
    Details = require('./details'),
    Root = require('./root.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  TabBarIOS,
  ListView,
  Navigator,
  NavigatorIOS,
} = React;




class Filters extends React.Component{
  goToRoot(){
    this.props.navigator.push({
      component: Root,
      title: 'Sports Hub',
      passProps: {navigator: this.props.navigator},
    })
  }

  goToDetails(){
    this.props.navigator.push({
      component: Details,
      title: 'Sports Hub',
    })
  }

  constructor(props){
    super(props);
    this.state = {
      sport: '',
      isLoading: false,
      error: false
    }
  }

 render(){
   return (
      <View style={styles.container}>
      <View style={styles.loginContainer}>

      <TextInput
        style={styles.searchInput}
        onChangeText={(sport) => this.setState({sport})}
        value={this.state.sport}
        />
        
      <TouchableHighlight
          style={styles.button}
          onPress={this.goToDetails.bind(this)}>
          <Text style={styles.buttonText}> Search Results </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.goToRoot.bind(this)}>
          <Text style={styles.buttonText}> Go To Root </Text>
        </TouchableHighlight>

      </View>
    </View>

   )
 }
};

var styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252525',
  },
   loginContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 50,
    backgroundColor: 'white',
    width: 300,
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#46833d',
    borderColor: 'white',
    borderRadius: 5,
    height: 40,
    width: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 100,
  },
    buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  loginButton: {
    width: 170,
    height: 50,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    marginTop: 200,
  },
  loginbuttonText: {
    color: 'white',
    textAlign: 'center',
  },
});



module.exports = Filters;