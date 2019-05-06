import React from 'react';
import {Text,View, ActivityIndicator} from 'react-native';

const Spinner=({size})=>{
return <View>
    <ActivityIndicator style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'}}
    size={size||"large"}/>
</View>
}
export default Spinner;