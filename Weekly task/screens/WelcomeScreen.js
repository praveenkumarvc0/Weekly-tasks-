import React from 'react'
import { ImageBackground, StyleSheet,Image,Text, View } from 'react-native'

export default function WelcomeScreen() {
    return (
       <View style={{flex:1}}>
           <ImageBackground source={require('../assets/background.jpg')} style={{flex:1,alignItems:'center',paddingTop:'30%'}} >
         <Image source={require('../assets/logo-red.png')} style={{flex:0.2}} resizeMode='contain'/>
         <Text>Sell What you Don't need</Text>
        </ImageBackground>
        <View style={{backgroundColor:'#fc5c65',flex:0.12}}></View>
           <View style={{backgroundColor:'#4ECDC4',flex:0.12}}></View>
       </View> 
     
        
    )
}

const styles = StyleSheet.create({

    
})