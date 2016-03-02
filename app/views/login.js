'use strict';

var React = require('react-native'),
    Firebase = require('firebase'),
    Filters = require('./filters'),
    MyAccount = require('./myaccount');


var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  RadioButtons,
  Navigator,
  NavigatorIOS,
} = React;

var FBSDKLogin = require('react-native-fbsdklogin');
var {
  FBSDKLoginButton,
} = FBSDKLogin;
var FBSDKCore = require('react-native-fbsdkcore');
var {
  FBSDKAccessToken,
} = FBSDKCore;



class Login extends React.Component{

     fetchData() {
       fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCNeZ03YXpy8AyPJrkVv7nKw7tswfWj-qM&radius=5000&keyword=${this.state.sport}&location=28.5959,-81.3437`)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.results),
               isLoading: false
           });

       })
       .done();
   }

  goToFilters(){
    this.props.navigator.push({
      component: Filters,
      title: 'Filters',
      passProps: {navigator: this.props.navigator}
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
          <Image style={styles.logo} source={require('../Images/logo.png')} />
          <Text style={styles.logoText}> Field Finder </Text>
        </View>
        <View style={styles.socialmediaContainer}>
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
                              <TouchableHighlight onPress={this.goToFilters.bind(this)} placeholder="Username" style={styles.loginButton}>
                    <Text style={styles.loginbuttonText}> Filters </Text>
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
    alignItems: 'center',
  },
  loginTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
    marginTop: 30,
    marginBottom: 50,
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
    height: 115,
    width: 400,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButton: {
    height: 115,
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: 390,
    marginTop: 60,
  },
  loginbuttonText: {
    color: 'white',
    textAlign: 'center',
  },
  socialbuttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 50,
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    width:350,
    justifyContent: 'center',
    height: 60,
    fontSize: 13,
    padding: 5,
    paddingLeft:15,
    marginTop: 150,
  },
  loginTitle: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 230,
    marginLeft: 20,
  },
  logoText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 25,
    marginLeft: 50,
    marginTop: 20,
  }
});

module.exports = Login;