'use strict';

var React = require('react-native'),
    SignUp = require('../views/signup'),
    SpotLight = require('../views/spotlight'),
    Favorites = require('../views/favorites'),
    MyAccount = require('../views/myaccount');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Component,
  Navigator,
  NavigatorIOS,
} = React;

class TabBar extends React.Component{
 
 constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'SpotLight',
      sport: this.props.sport
    }
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
            title="Spot Light"
            icon={require('../Images/spotlight.png')}
            selected={this.state.selectedTab === 'SpotLight'}
            onPress={() => {this.setState({
              selectedTab: 'SpotLight',
            });
          }}>
          
          <SpotLight navigator={this.props.navigator} />
          
          </TabBarIOS.Item>
          
          <TabBarIOS.Item
            title="Favorites"
            icon={require('../Images/inbox.png')}
            selected={this.state.selectedTab === 'Favorites'}
            onPress={() => {this.setState({
              selectedTab: 'Favorites',
            });
          }}>
            
          <Favorites navigator = {this.props.navigator}/>
          
          </TabBarIOS.Item>
          
          <TabBarIOS.Item
            title="My Account"
            icon={require('../Images/profile.png')}
            selected={this.state.selectedTab === 'MyAccount'}
            onPress={() => {this.setState({
              selectedTab: 'MyAccount',
            });
          }}>
              
          <MyAccount navigator = {this.props.navigator}/>
            
            </TabBarIOS.Item>
          </TabBarIOS>
      );
    }
};
var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
module.exports = TabBar;