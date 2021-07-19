import React from 'react'
import { StyleSheet, Text, View,StatusBar,Platform, SafeAreaView,Image } from 'react-native'

export default function ViewImageScreen() {
    return (
        
        <View style={styles.container}>
            <View style={{flex:0.50,justifyContent:'space-between',flexDirection:'row',padding:17}}> 
                <View style={{backgroundColor:'#fc5c65',flex:0.15}}></View>
                <View style={{backgroundColor:'#4ECDC4',flex:0.15}}></View>
               
            </View>
            <Image source={require('../assets/chair.jpg')} style={{width:'100%',height:'80%'}} resizeMode='contain'></Image>
            
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:StatusBar.currentHeight+3
    }
})