import { Component } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image, View, TextInput, Dimensions, RNFetchBlob
} from 'react-native';
import React from 'react';
import Icon from '../../components/IconComponent';

const { height, width } = Dimensions.get('window');

type Props = {};
export default class AppsScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      tabBarIcon: ({ tintColor }) => <Icon icon="HomeGrey" size={30}/>,
    };
  };

  navigate = () => console.log('hello');

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TextInput placeholder='Search' style={{
            width: '100%', backgroundColor: '#d6d6d6', borderRadius: 10, height: 35, paddingLeft: 10, marginBottom: 10,
          }}/>
          <Text style={styles.headingText}>Apps</Text>
          <View style={styles.appsContainer}>
            <View style={styles.appIcon}>
              <TouchableOpacity style={styles.appSquare} onPress={() => this.props.navigation.navigate('App1')}>
                <Image source={require('../../../Assets/radar-black.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Radar</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#ffd6f7' }]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/cryptokitties.png')} style={{ width: 60, height: 60, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Cryptokitties</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#08072c' }]} onPress={() => this.props.navigation.navigate('App6')}>
                <Image source={require('../../../Assets/dharma.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Dharma</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#ffffff' }]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/wyre-1.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Wyre</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#ffffff' }]} onPress={() => this.props.navigation.navigate('App5')}>
                <Image source={require('../../../Assets/peepeth.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Peepeth</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#5A28C6' }]} onPress={() => this.props.navigation.navigate('App4')}>
                <Image source={require('../../../Assets/bounties.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Bounties</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#000000' }]} onPress={() => this.props.navigation.navigate('App7')}>
                <Image source={require('../../../Assets/new-chat-logo.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>MetaMulitisg</Text>
            </View>
          </View>
          <Text style={styles.headingText}>Trending Apps</Text>
          <View style={styles.appsContainer}>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#dbe0ff' }]} onPress={() => this.props.navigation.navigate('App3')}>
                <Image source={require('../../../Assets/localethereum.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>localethereum</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#fff4c8' }]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/etheremon.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Etheremon</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#37474f' }]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/compound.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Compound Fi...</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#ffffff' }]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/foam.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Foam</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#F20000' }]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/qnatas-logo.png')} style={{ width: 45, height: 45, resizeMode: 'contain' }}/>
              </TouchableOpacity>
              <Text style={styles.appText}>Qantas</Text>
            </View>
            {/* <View style={styles.appIcon}> */}
            {/* <TouchableOpacity style={[styles.appSquare, { backgroundColor: '#ffffff' }]} onPress={() => this.props.navigation.navigate('App2')}> */}
            {/* <Image source={require('../../../Assets/instadapp.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }}/> */}
            {/* </TouchableOpacity> */}
            {/* <Text style={styles.appText}>InstaDApp</Text> */}
            {/* </View> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  appIcon: {
    alignItems: 'center',
    height: 84,
    margin: 10,
    maxWidth: 84,
    justifyContent: 'space-between',
  },
  appsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10,
    paddingTop: 10,
    width: width - 20,

  },
  appSquare: {
    alignItems: 'center',
    backgroundColor: '#43fd9c',
    borderRadius: 10,
    height: 65,
    justifyContent: 'center',
    width: 65,
    shadowColor: '#7d7d7d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  appText: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Graphik',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  headingText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Graphik',
    fontWeight: '500'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
