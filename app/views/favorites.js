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
  Navigator,
  NavigatorIOS,
} = React;

class Favorites extends React.Component{
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

            <Text style={styles.favoritesTab}> Favorites Tab </Text>

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
  favoritesTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 300,
  },

});

module.exports = Favorites;