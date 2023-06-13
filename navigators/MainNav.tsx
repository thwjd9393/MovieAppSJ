import React from 'react'

//BottomTabnavigator 객체 생성 [등록할 스크린 리스트 타입은 별도 type.tsx에서 작성]

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'

//타입지정과 함께 바텀네비게이션 만드리
const BottomTab = createBottomTabNavigator<MainNavScreenList>()

//등록할 스크린 or 네비게이터 import
import MovieNav from '../screen_main/MovieNav'
import Favorite from '../screen_main/Favorite'
import Community from '../screen_main/Community'


export default function MainNav():JSX.Element {
    return(
        <BottomTab.Navigator screenOptions={{headerShown : false}}>
            <BottomTab.Screen name='MovieNav' component={MovieNav}></BottomTab.Screen>
            <BottomTab.Screen name='Favorite' component={Favorite}></BottomTab.Screen>
            <BottomTab.Screen name='Community' component={Community}></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}