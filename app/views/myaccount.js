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

var FBSDKCore = require('react-native-fbsdkcore');
var {
  FBSDKAccessToken,
} = FBSDKCore;

var {
  FBSDKGraphRequest,
} = FBSDKCore;

var MyAccount = React.createClass ({
  goToSpotLight(){
    this.props.navigator.push({
      component: SpotLight,
      title: 'Spot Light',
    })
  },

  goToSignup(){
    this.props.navigator.push({
      component: SignUp,
      title: 'Sign Up',
    })
  },

  getInitialState(){

     var fetchFriendsRequest = new FBSDKGraphRequest((error, result) => {
      if (error) {
      alert('Error making request.');
      } else {
      this.setState({
        pic: result.picture.data.url,
        age: result.age_range.min,
        name: result.name,
        email: result.email,
        gender: result.gender

      });
      console.log(result);
      }
    }, '/me?fields=id,name,age_range,gender,picture.type(large)');  
    fetchFriendsRequest.start();

    return {
      pic: null,
      email: null,
      gender: null,
      age: null,
      name: null
    };
  },
  
  render(){
    var pic = this.state.pic,
    age = this.state.age,
    name = this.state.name,
    gender = this.state.gender;
    return(
      <View style={styles.mainContainer}>
          <View style={styles.detailsContainer}>
          <Image style={styles.image} source={{uri: pic}}/>

            <Text style={styles.detailsHeader}> Name </Text>
            <Text style={styles.headerDetails}> {name}</Text>

            <Text style={styles.detailsHeader}> Age </Text>
            <Text style={styles.headerDetails}> {age} </Text>

            <Text style={styles.detailsHeader}> Gender </Text>
            <Text style={styles.headerDetails}> {gender} </Text>
          </View>


        </View>
    )
  }
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#252525',
  },
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 120,
    borderRadius: 70,
    paddingRight: 30,
    marginLeft: 115,
  },
  locationName: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  detailsHeader: {
    color: 'green',
    fontSize: 14,
    marginTop: 20,
    marginLeft: 10,
  },
  headerDetails: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },

});

module.exports = MyAccount;