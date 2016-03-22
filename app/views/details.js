'use strict';

var React = require('react-native'),
    SpotLight = require('./spotlight.js'),
    Swiper = require('react-native-swiper');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ListView,
  Navigator,
  NavigatorIOS,
  ScrollView,
} = React;

var weekdayHours = 'placedetails.opening_hours.weekday_text'

var Carousel = require('react-native-carousel');


var Static_URL = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJdRyiowtw54gRg5WRcBBWs9s&key=AIzaSyA93qzAQmirXxVTyxotuBIzmX62tIBEAf0';

// var Request_URL = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='+this.props.tennis+'&key=AIzaSyA93qzAQmirXxVTyxotuBIzmX62tIBEAf0';

class Details extends React.Component{


      constructor(props) {
         super(props);

         this.state = {
          weekdayHours: null,
          tennis: this.props.tennis,
          placeidURL: this.props.placeidURL,
        }


      }


    function(responseData) {
    this.setState({
      result: responseData.result,




    });

}

componentDidMount() {
    this.fetchData();
    console.log(this.props.tennis);

}

fetchData() {
    fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid='+this.props.placeidURL+'&key=AIzaSyA93qzAQmirXxVTyxotuBIzmX62tIBEAf0')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          result: responseData.result,
        });
      })
      .done();
}


    
render() {

    if (!this.state.result) {
      return this.renderLoadingView();
    }
    
    var placedetails = this.state.result;
    return this.renderPlaceDetails(placedetails);
  }

    renderLoadingView() {
    return (
      <View style={styles.maincontainer}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderPlaceDetails(placedetails) {



        if(placedetails.photos) {
        var photoreference = placedetails.photos[0].photo_reference;

        var urlDeff = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';

        var apiKey = '&key=AIzaSyCNeZ03YXpy8AyPJrkVv7nKw7tswfWj-qM';

        var urlTest = urlDeff + photoreference + apiKey;

        
        var photoreference1 = placedetails.photos[1].photo_reference;

        var urlDeff1 = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';

        var apiKey1 = '&key=AIzaSyCNeZ03YXpy8AyPJrkVv7nKw7tswfWj-qM';

        var urlTest1 = urlDeff1 + photoreference1 + apiKey1;


        var photoreference2 = placedetails.photos[2].photo_reference;

        var urlDeff2 = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';

        var apiKey2 = '&key=AIzaSyCNeZ03YXpy8AyPJrkVv7nKw7tswfWj-qM';

        var urlTest2 = urlDeff2 + photoreference2 + apiKey2;
      }
      else {
        urlTest = "";
        urlTest1 = "";
        urlTest2 = "";

      }




    return (
      <View style={styles.mainContainer}>
        <View style={styles.ImagesContainer}>
          <Carousel hideIndicators={true} delay={3500} >
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{uri: urlTest}}>
              </Image>
            </View>
        <View style={styles.container}>
                              <Image
              style={styles.image}
              source={{uri: urlTest1}}>
          </Image>
        </View>
        <View style={styles.container}>
                              <Image
              style={styles.image}
              source={{uri: urlTest2}}>
          </Image>
        </View>
      </Carousel>
      </View>
      

       <View style={styles.contactTitleContainer}>
          
          <Text style={styles.contactTitle}>{placedetails.name}</Text>
        </View>

       
        <Swiper style={styles.wrapper} showsButtons={true}>
    <View style={styles.detailsContainer}>
          <Text style={styles.contactHeader}> Location Address </Text>
          <Text style={styles.contactDetails}>{placedetails.formatted_address}</Text>
          
          <Text style={styles.contactHeader}> Location Phone Number </Text>
          <Text style={styles.contactDetails}>{placedetails.formatted_phone_number}</Text>
          </View>

        <View style={styles.detailsContainer}>
      
          <Text style={styles.contactHeader}> Hours Of Operation </Text>
          <Text style={styles.contactHours}>{placedetails.opening_hours.weekday_text[0]}</Text>
          <Text style={styles.contactHours}>{placedetails.opening_hours.weekday_text[1]}</Text>
          <Text style={styles.contactHours}>{placedetails.opening_hours.weekday_text[2]}</Text>
          <Text style={styles.contactHours}>{placedetails.opening_hours.weekday_text[3]}</Text>
          <Text style={styles.contactHours}>{placedetails.opening_hours.weekday_text[4]}</Text>
          <Text style={styles.contactHours}>{placedetails.opening_hours.weekday_text[5]}</Text>
          <Text style={styles.contactHours}>{placedetails.opening_hours.weekday_text[6]}</Text>
          </View>

        </Swiper>
    </View>
    );
  }
};
var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  wrapper:{
    marginTop:5,
  },
  alignSwipper:{

  },
  imagesContainer: {
    flex: 1,
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  hoursContainer: {
    flex: 1,
  },
  contactTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  contactContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  contactHeader: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  contactDetails: {
    color: 'green',
    fontSize: 14,
    marginBottom: 20,
  },
  contactHours: {
    color: 'green',
    fontSize: 14,
    marginBottom: 5,
  },
  image: {
    width: 380,
    height: 350,
  },
  detailshours: {

    color: 'green',
    fontSize: 12,
    marginRight: 5,
  },
  detailsHeader: {
    color: 'green',
    fontSize: 14,
  },
  headerDetails: {
    color: 'white',
    fontSize: 16,
  },
    container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

});

module.exports = Details;