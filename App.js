/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import firebase from 'firebase';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import Login from "./src/component/Login";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  state={loggedIn:false}
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB-cG4DhO48s3LR3aUx4tbNm67Euop2g6E",
      authDomain: "auth-1ed7c.firebaseapp.com",
      databaseURL: "https://auth-1ed7c.firebaseio.com",
      projectId: "auth-1ed7c",
      storageBucket: "auth-1ed7c.appspot.com",
      messagingSenderId: "692618180787",
      appId: "1:692618180787:web:2747a30ab6921db2"
    });
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({loggedIn:true});
      }
      else this.setState({loggedIn:false});
    })
  }
  renderContent=()=>{
    console.log('triggured');
    return this.state.loggedIn?<TouchableOpacity onPress={()=>{firebase.auth().signOut()}}  style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:'#fff',backgroundColor:'#841584', padding:15, borderRadius:10}}>Logout</Text></TouchableOpacity>:<Login/>
  }
  render() {
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#2ecc71',
  }
});
