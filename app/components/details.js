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
              source={{uri: 'http://www.thundertix.com/wp-content/uploads/2012/12/sports-ticketing-software-.jpg'}}>
          </Image>

          <View style={styles.locationText}>
            <Text style={styles.locationName}> Winter Park Community Park </Text>
            
            <Text style={styles.detailsHeader}> Address </Text>
            <Text style={styles.headerDetails}> 1436 Pine St, Winter Park FL 32792 </Text>

            <Text style={styles.detailsHeader}> Location Type </Text>
            <Text style={styles.headerDetails}> Baseball Field</Text>

            <Text style={styles.detailsHeader}> Location Surface </Text>
            <Text style={styles.headerDetails}> Grass </Text>

            <Text style={styles.detailsHeader}> Hour Of Operation </Text>
            <Text style={styles.headerDetails}> Mon - Sunday 7 A.M - 8 P.M </Text>
          </View>


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
    width: 420,
    height: 380,
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