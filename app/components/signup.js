'use strict';

var React = require('react-native'),
    SpotLight = require('./spotlight.js');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} = React;

class Login extends React.Component{
  goToSpotLight(){
    this.props.navigator.push({
      component: SpotLight,
      title: 'Spot Light',
    })
  }

  goToSignup(){
    this.props.navigator.push({
      component: SignUp,
      title: 'Sign Up',
    })
  }
  render(){
    return(
      <View style={styles.mainContainer}>
        <View style={styles.signupContainer}>
          <Text style={styles.signupTitle}> Signup For An Account </Text>
          <TextInput style={styles.searchInput} placeholder="Enter Full Name"
            placeholderTextColor="black"/>
          <TextInput style={styles.searchInput} placeholder="Enter Email"
            placeholderTextColor="black"/>
          <TextInput style={styles.searchInput} placeholder="Enter Password"
            placeholderTextColor="black"/>
          <TextInput style={styles.searchInput} placeholder="Enter Zip Code"
            placeholderTextColor="black"/>
          <TouchableHighlight onPress={this.goToSpotLight.bind(this)} placeholder="Username" style={styles.loginButton}>
            <Text style={styles.loginbuttonText}> Submit </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252525',
  },
  signupContainer: {
  },
  socialmediaContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
    marginLeft: 25,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    height: 50,
    width: 300,
    marginTop: 30,
  },
  forgotPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    color: 'white',
  },
  loginButton: {
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
  loginbuttonText: {
    color: 'white',
    textAlign: 'center',
  },
  socialbuttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});

module.exports = Login;