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
  PickerIOS,
  Dimensions,
} = React;

var PickerItemIOS = PickerIOS.Item ;

var array = [
  {label: "Tennis",value:"Tennis"},
  {label:"Basketball",value:"Basketball"},
  {label:"Football",value:"Football"},
  {label:"Baseball", value:"Baseball"},
  {label:"Soccer", value:"Soccer"},
]


var Filters = React.createClass({

  getInitialState: function() {
    return {
      selected: "",
    };
  },

Root(){
    this.props.navigator.push({
            title: 'Spot Light',
            component: Root,
            passProps: {sport: this.state.sport, navigator: this.props.navigator}
    });
  },


 render: function(){



    return (
      <View style={styles.container}>
        
        <PickerIOS
          style={styles.pickerios}
          selectedValue={this.state.selected}
          onValueChange={(sport) => this.setState({sport})}>
          {array.map((obj) => (
            <PickerItemIOS
              key={obj.value+obj.label}
              value={obj.value}
              label={obj.label}
            />
          ))}
        </PickerIOS>

        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => this.Root()}>
          <Text style={styles.buttonText}> Filter Results </Text>
        </TouchableHighlight>
      
      </View>
    );
  },
});

var styles = StyleSheet.create({

container: { 
    flex: 1,
  },
label: {
  color: 'white',
},
loginContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 60,
  },
searchInput: {
    height: 70,
    width: 320,
    marginTop: 80,
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
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
    marginTop: 55,
  },
  loginButton: {
    backgroundColor: '#46833d',
    borderColor: 'white',
    borderRadius: 5,
    height: 125,
    width: 400,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbuttonText: {
    color: 'white',
    textAlign: 'center',
  },
  sportButton: {
    backgroundColor: '#46833d',
    borderColor: 'white',
    height: 123,
    width: 187,
    borderWidth: 1,
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