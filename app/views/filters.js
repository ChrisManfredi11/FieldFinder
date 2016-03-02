'use strict';

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
  Navigator,
  NavigatorIOS,
} = React;


class Filters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sport: this.props.sport,
    }
  }
  handleChange(event){
    this.setState({
      sport: event.nativeEvent.text
    })
}
  
  Root(){
    this.props.navigator.push({
            title: 'Root',
            component: Root,
            passProps: {sport: this.state.sport}
    });
  }


 render(){
   return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>

      <TextInput
        style={styles.searchInput}
        onChangeText={(sport)=>this.setState({sport})}
        placeholder={'请输入商品名称商品'}
        placeholderTextColor={'white'}
        value={this.state.sport} />
        </View>
      <TouchableHighlight
          style={styles.loginButton}
          onPress={() => this.Root()}          
          placeholder={'请输入商品名称商品'}
          placeholderTextColor={'white'}>
          <Text style={styles.buttonText}> Filter Results </Text>
        </TouchableHighlight>

      </View>

   );
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
    height: 70,
    width: 320,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 2,
    color: 'white',
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
});



module.exports = Filters;