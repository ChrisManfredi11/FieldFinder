'use strict';

import Radio, {RadioButton} from 'react-native-simple-radio-button'


var React = require('react-native'),
    TabBar = require('../components/tabbar'),
    SpotLight = require('../components/spotlight'),
    Details = require('./details'),
    Root = require('./root'),
    Login = require('./login'),
    MyAccount = require('./myaccount');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  NavigatorIOS,
  Component,
} = React;

var Filters = React.createClass({

  
  Root(){
    this.props.navigator.push({
            title: 'Spot Light',
            component: Root,
            passProps: {sport: this.state.sport, navigator: this.props.navigator}
    });
  },

  getInitialState: function() {
    return {
      types1: [{label: 'Soccer', value: 'Soccer Field'},{label: 'Tennis', value: 'Tennis Court'},{label: 'Basketball', value: 'Basketball Court'},{label: 'Baseball', value: 'Baseball Field'} ],
    }
  },
 render: function(){

   return (

      <View style={styles.container}>
        <View style={styles.loginContainer}>

          <Radio
            style={styles.radioButtons}
            radio_props={this.state.types1}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={'#46833d'}
            labelColor={'white'}
            animation={true}
            initial={null}
            onPress={(sport) => {this.setState({sport:sport})}}
          />
          
        </View>
      <TouchableHighlight
          style={styles.loginButton}
          onPress={() => this.Root()}>
          <Text style={styles.buttonText}> Filter Results </Text>
        </TouchableHighlight>

      </View>

   );
 }
});

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
    height: 70,
    width: 320,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 2,
    color: 'white',
    paddingLeft: 10,
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
    backgroundColor: '#46833d',
    borderColor: 'white',
    borderRadius: 5,
    height: 115,
    width: 400,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbuttonText: {
    color: 'white',
    textAlign: 'center',
  },
  radioOption: {

  },
  radioButtons: {
    paddingTop: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 30,
  },
  label: {
    color: 'white',
  },
  selectedTab: {
    color: 'white',
    fontSize: 20,
  },
});



module.exports = Filters;