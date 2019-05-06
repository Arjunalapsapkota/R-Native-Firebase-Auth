import React, { Component } from "react";
import Spinner from './Spinner';
import firebase from 'firebase';
import {
 StyleSheet,
 Text,
 View,
 Image,
 TextInput,
 Button,
 buttontext
} from "react-native";

class Login extends Component {
 state = { email:'', password: '' , error:'', loading:false};
 handleClick = () => {

    const {email,password}=this.state;
    this.setState({email:email.toLowerCase()})
    this.setState({error:'',loading:true});
    if (!email||!password) this.setState({error:'Check Input Field !!',loading:false})
    else
    firebase.auth().signInWithEmailAndPassword(email,password)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(()=>{
                this.setState({error:'Authentication Failed !!',loading:false});
                });
    });
 };
 render() {
   const {
     container,
     icon,
     body,
     footer,
     text,
     button,
     textInput,
     inputBox
   } = styles;
   return (
     <View style={container}>
       <View style={icon}>
         <Image
           
           
           source={require("../icon.png")}
         />
       </View>
       <View style={body}>
         <View style={{ flex: 4 }}>
           <TextInput
             style={textInput}
             value={this.state.email}
             placeholder="email"
             autoCapitalize="none"
             onChangeText={email => this.setState({ email,error:'' })}
           />
           <TextInput
             style={textInput}
             secureTextEntry={true}
             autoCapitalize="none"
             autoCorrect={false}
             value={this.state.password}
             placeholder="password (atleast 6 character)"
             onChangeText={password => this.setState({ password,error:'' })}
           />
           <Text style={{fontSize:20,color:'#96281b',alignSelf:'center'}}>{this.state.error}</Text>
         </View>
         <View style={{ flex: 2 }}>
          
           {this.state.loading?<Spinner style={{justifyContent:'flex-start'}}size='large'/>: <View style={button}><Button title="Login" color="white" onPress={this.handleClick} /></View>}
           
         </View>
       </View>

       <View style={footer}>
         <Text>Forgot password?</Text>
         <Text style={text}>New member? Sign Up here!</Text>
       </View>
     </View>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#2ecc71"
 },
 icon: {
   flex: 2,
   alignItems: "center",
   
   justifyContent:"flex-end"
 },
 body: { flex: 2, alignItems: "center" },
 footer: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center"
 },
 text: {
   marginTop: 15
 },

 button: {
   backgroundColor: "#841584",

   borderRadius: 25,
   padding: 5,
   paddingLeft: 20,
   paddingRight: 20
 },
 textInput: {
   height: 50,
   padding: 5,
   paddingLeft: 15,
   margin: 10,
   width: 300,
   borderColor: "gray",
   borderWidth: 2,
   borderRadius: 20,
   backgroundColor: "#dcdde1"
 }
});
export default Login;