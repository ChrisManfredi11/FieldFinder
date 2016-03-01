'use strict';

var React = require('react-native'),
    Favorites = require('../views/favorites'),
    Account = require('../views/myaccount'),
    Details = require('../views/details'),
    TabBar = require('../components/tabbar');
    
var {
  AppRegistry,
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
            sport: '',
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

     goToDetails(){
    this.props.navigator.push({
      component: Details,
      title: 'Details Page',
    });
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
        console.log(photoreference);

        var urlDeff = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';

        var apiKey = '&key=AIzaSyCNeZ03YXpy8AyPJrkVv7nKw7tswfWj-qM';

        var urlTest = urlDeff + photoreference + apiKey;
      }
      else {
        urlTest = "";
      }
      
return (
      <View style={styles.mainContainer}>
          <TouchableHighlight
          onPress={this.goToDetails.bind(this)}>              
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
    backgroundColor: '#252525',
  },
  textContainer: {
  },
  image: {
    paddingTop: 220,
    width: 420,
    height: 275,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  address: {
    color: 'white',
    textAlign: 'left',
    padding: 5,
    paddingLeft: 25,
  },

});

module.exports = SpotLight;