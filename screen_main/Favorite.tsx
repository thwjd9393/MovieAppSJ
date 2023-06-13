import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'
type FavoriteProp = BottomTabScreenProps<MainNavScreenList,'Favorite'>


export default function Favorite(props:FavoriteProp):JSX.Element {
    return (
        <View style={style.root}>
            <Text style={style.title}>Favorite</Text>
        </View>
    )
}


const style = StyleSheet.create({

    root : {
        flex :1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize : 24,
        color : 'black',
        padding : 8,
        fontWeight : 'bold'
    }
    
})