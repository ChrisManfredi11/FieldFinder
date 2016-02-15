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
          <View style={styles.detailsContainer}>
            <Image
              style={styles.image}
              source={require('../Images/profilepic.jpg')}>
          </Image>

            <Text style={styles.detailsHeader}> Full Name </Text>
            <Text style={styles.headerDetails}> Justin Derico Suavey </Text>

            <Text style={styles.detailsHeader}> Age </Text>
            <Text style={styles.headerDetails}> 25 </Text>

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
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 120,
    borderRadius: 70,
    paddingRight: 30,
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
  },
  headerDetails: {
    color: 'white',
    fontSize: 16,
  },

});

module.exports = Login;