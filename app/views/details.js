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
  ListView,
} = React;

var Request_URL = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJdRyiowtw54gRg5WRcBBWs9s&key=AIzaSyA93qzAQmirXxVTyxotuBIzmX62tIBEAf0';

var Details  = React.createClass({

getInitialState: function() {
    return {
      result: null,
    };
},

componentDidMount: function() {
    this.fetchData();
},

fetchData: function() {
    fetch(Request_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          result: responseData.result,
        });
      })
      .done();
},

  function(responseData) {
    this.setState({
      result: responseData.result,
    });
},
    
render: function() {

    if (!this.state.result) {
      return this.renderLoadingView();
    }
    
    var placedetails = this.state.result;
    return this.renderPlaceDetails(placedetails);
  },

    renderLoadingView: function() {
    return (
      <View style={styles.maincontainer}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },

  renderPlaceDetails: function(placedetails) {

          if(placedetails.photos) {
        var photoreference = placedetails.photos[0].photo_reference;

        var urlDeff = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';

        var apiKey = '&key=AIzaSyCNeZ03YXpy8AyPJrkVv7nKw7tswfWj-qM';

        var urlTest = urlDeff + photoreference + apiKey;
      }
      else {
        urlTest = "";
      }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.detailsContainer}>
                    <Image
              style={styles.image}
              source={{uri: urlTest}}>
          </Image>
          <Text style={styles.locationName}>{placedetails.vicinity}</Text>
          <Text style={styles.headerDetails}> Hours Of Operation</Text>
          <Text style={styles.detailshours}>{placedetails.opening_hours.weekday_text[0]}</Text>
          <Text style={styles.detailshours}>{placedetails.opening_hours.weekday_text[1]}</Text>
          <Text style={styles.detailshours}>{placedetails.opening_hours.weekday_text[2]}</Text>
          <Text style={styles.detailshours}>{placedetails.opening_hours.weekday_text[3]}</Text>
          <Text style={styles.detailshours}>{placedetails.opening_hours.weekday_text[4]}</Text>
          <Text style={styles.detailshours}>{placedetails.opening_hours.weekday_text[5]}</Text>
          <Text style={styles.detailshours}>{placedetails.opening_hours.weekday_text[6]}</Text>

        </View>
      </View>
    );
  },
});
var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    alignItems: 'center',
  },
  detailshours: {
    color: 'green',
    fontSize: 12,
    marginTop: 10,
    marginRight: 5,
  },
  detailsHeader: {
    color: 'green',
    fontSize: 14,
    marginTop: 10,
  },
  headerDetails: {
    color: 'white',
    fontSize: 16,
  },

});

module.exports = Details;