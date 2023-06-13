import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

//Prop 만들기
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'
type CommunityProp = BottomTabScreenProps<MainNavScreenList,'Community'>

export default function Community(props : CommunityProp):JSX.Element {
    return (
        <View style={style.root}>
            <Text style={style.title}>Community</Text>
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