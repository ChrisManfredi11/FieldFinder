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
} = React;

var LocationURL = 'https://api.import.io/store/connector/c8acc07e-f5ed-48f8-9424-ac27fa49fb2f/_query?input=webpage/url:http%3A%2F%2Fwww.tennisround.com%2Ftennis-courts%2Ffl%2Forlando&&_apikey=2f5b2982f0034a4aa4d8cab5bdec8b4106b2f25ec1e190c68a974af6416c4bed47be1f19b5c0d358eb3809c24629081a0402f2c5ca9c71576c267afca68e22f47448553daa33ab0f97363a3a065b2418';

class SpotLight extends React.Component{
  goToDetails(){
    this.props.navigator.push({
      component: Details,
      title: 'Location Details',
    })
  }

  constructor(props) {
         super(props);
         this.state = {
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
       fetch(LocationURL)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.results),
               isLoading: false
           });
       })
       .done();
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
       return (
        <View>
       <View>
          <TouchableHighlight
              onPress={this.goToDetails.bind(this)}>
                <View>
                    <View style={styles.mainContainer}>
                    
                    <Image
                      source={{uri: 'http://2.imimg.com/data2/MR/FF/MY-3897676/tennis-court-500x500.jpg'}}
                      style={styles.image}/>
                        <View style={styles.rightContainer}>
                        
                        <Text style={styles.address}>{tennis.courtaddress_value}</Text>
                        <Text style={styles.location}>{tennis.tinymuted_value}</Text>
                      
                      </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
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
  locationContainer: {
    flex: 1,
  },
  locationText: {
    height: 80,
    width: 420,
    marginTop: 200,
    opacity: 0.8,
  },
  locationName: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    marginTop: 10,
    paddingLeft: 5,
  },
  locationAddress: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    paddingLeft: 5.
  },
  locationDistance: {
    fontSize: 15,
    textAlign: 'right',
    color: 'white',
    paddingRight: 15,
  },
  image: {
    width: 420,
    height: 275,
  },
  address: {
    color: 'white',
  },
  location: {
    color: 'white',
  },

});

module.exports = SpotLight;