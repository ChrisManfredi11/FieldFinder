'use strict';

var React = require('react-native'),
    Root = require('./root'),
    SignUp = require('./signup'),
    MyAccount = require('./myaccount');


var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} = React;

var FBSDKLogin = require('react-native-fbsdklogin');
var {
  FBSDKLoginButton,
} = FBSDKLogin;
var FBSDKCore = require('react-native-fbsdkcore');
var {
  FBSDKAccessToken,
} = FBSDKCore;

var userID = 'https://graph.facebook.com/v2.4/me?fields=picture&access_token=CAACEdEose0cBAPcxWZCZCl2ccZBD5eHvuiCi8NbLZBhwsehScEqYzZByo9IrebiZCOOcG344YSs2XXkFqyIFZApdxO6KRQZBiylZAHSn0frM8QbxuFGnwRI91ZAekBPr5QcZAuxidraZAjv0xnaHJZBuiNskmZC0ci5AHbBJsqRnnMGY9qpsiNs0v4ZAxoDVosH2seFDv9sljNEILmxyNRTmZCSG2pAG'

class Login extends React.Component{
  goToRoot(){
    this.props.navigator.push({
      component: Root,
      title: 'Sports Hub',
    })
  }

  goToSignup(){
    this.props.navigator.push({
      component: SignUp,
      title: 'Sign Up',
    })
  }
  
  goToMyAccount(){
    this.props.navigator.push({
      component: MyAccount,
      title: 'My Account',
    })
  }
  render(){
    return(
      <View style={styles.mainContainer}>
        <View style={styles.loginContainer}>

          <Text style={styles.loginTitle}> Login To Account </Text>
          <TextInput style={styles.searchInput} placeholder="Enter Username"
  placeholderTextColor="black"/>
          <TextInput style={styles.searchInput} placeholder="Enter Password"
  placeholderTextColor="black"/>
          <TouchableHighlight onPress={this.goToRoot.bind(this)} placeholder="Username" style={styles.loginButton}>
            <Text style={styles.loginbuttonText}> Login </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goToSignup.bind(this)}>
            <Text style={styles.forgotPassword }> Create An Account </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.socialmediaContainer}>
          <TouchableHighlight onPress={this.goToRoot.bind(this)} style={styles.facebookButton}>
                  <View style={this.props.style}>
        <FBSDKLoginButton
          style={styles.facebookButton}
          onWillLogin={() => {
            FBSDKAccessToken.getCurrentAccessToken((result) => {
              if (result == null) {
                alert('Start logging in.');
              } else {
                alert('Start logging out.');
              }
            }, '/me');
            return true;
          }}
          onLoginFinished={(error, result) => {
            if (error) {
              alert('Error logging in.');
            } else {
              if (result.isCancelled) {
                alert('Login cancelled.');
              } else {
                alert('Logged in.');
              }

            }
          }}
          onLogoutFinished={() => alert('Logged out.')}
          readPermissions={[]}
          publishPermissions={[]}/>
      </View>
    </TouchableHighlight>
        </View>
      </View>
    )
  }
};

var styles = StyleSheet.create({
    userImage: {
      height: 200,
      width: 200,
    },
    disclaimerContainer: {
    flex: 0.075,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  disclaimerText: {
    fontSize: 12,
    color: 'white',
  },
  loginContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedContainer: {
    flex: 0.775,
  },
  loginImage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  loginButton: {
    width: 200,
    height: 50,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    marginTop: 200,
  },
  imageBox: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
  },
  shareButton: {
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareText: {
    fontSize: 18,
    color: 'white',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252525',
  },
  loginContainer: {
    marginTop: 100,
  },
  socialmediaContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
  },
  loginTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
    marginTop: 30,
    marginLeft: 50,
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
  facebookButton: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: 450,
  },
  twitterButton: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#5fa9dd',
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: 450,
  },
});

module.exports = Login;