'use strict';

var React = require('react-native'),
    Favorites = require('../views/favorites'),
    Account = require('../views/myaccount'),
    Details = require('../views/details'),
    TabBar = require('../components/tabbar');
    
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  TabBarIOS,
  ListView,
  Navigator,
  NavigatorIOS,
} = React;

class SpotLight extends React.Component{

    constructor(props) {
         super(props);
         this.state = {
            placeidURL: null,
            photoImage: 'null',
             isLoading: true,
             dataSource: new ListView.DataSource({
                 rowHasChanged: (row1, row2) => row1 !== row2
             })
         };
     } 


     

  componentDidMount() {
       this.fetchData();
   }
 
   fetchData() {
       fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCNeZ03YXpy8AyPJrkVv7nKw7tswfWj-qM&radius=5000&keyword='+this.props.sport+'&location=28.5959,-81.3437')
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.results),
               isLoading: false,
           });

       })
       .done();
   }

            Details(tennis){
          console.log(tennis);
    this.props.navigator.push({
          component: Details,
          title: 'Location Details',
          passProps: {tennis: tennis, placeidURL: tennis.place_id, navigator: this.props.navigator}

    })
    }

  render(){
  
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCourts.bind(this)}
        style={styles.listView}/>
        );
      }  


    renderCourts(tennis) {
      if(tennis.photos) {
        var photoreference = tennis.photos[0].photo_reference;
        // console.log(photoreference);
        
        
        var urlDeff = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';

        var apiKey = '&key=AIzaSyA93qzAQmirXxVTyxotuBIzmX62tIBEAf0';

        var urlTest = urlDeff + photoreference + apiKey;
      }
      else {
        urlTest = 'http://www.moillusions.com/wp-content/uploads/photos1.blogger.com/blogger/5639/2020/400/slide0009_image021.jpg';
      }

      if(tennis.place_id) {
        var placeURL = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';

       var theplaceid = tennis.place_id;

        var placeAPIKey = '&key=AIzaSyA93qzAQmirXxVTyxotuBIzmX62tIBEAf0';
        
        var placeidURL = placeURL + theplaceid + placeAPIKey;
        console.log(placeidURL);
      }
      else {
        placeidURL = "";
      }



      
return (
      <View style={styles.mainContainer}>
          <TouchableHighlight
            onPress={()=>this.Details(tennis)}>              
              <Image
                source={{uri: urlTest}}
                style={styles.image}>

                   <View style={styles.textContainer}>
   
                    <Text style={styles.address}>{tennis.name}</Text>
                    <Text style={styles.address}>{tennis.vicinity}</Text>
                  
                  </View>

               </Image>
          </TouchableHighlight>
        </View>
    )
 }

};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    paddingTop: 223,
    width: 420,
    height: 275,
  },
  address: {
    color: 'white',
    textAlign: 'left',
    padding: 5,
    paddingLeft: 25,
  },

});

module.exports = SpotLight;