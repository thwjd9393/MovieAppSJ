import React from 'react'

// 스택네비게이터 객체 생성 [MovieList , MovieDetail 화면 등록]

import { createStackNavigator } from '@react-navigation/stack'
import { MovieNavScreenList } from '../types'

const Stack = createStackNavigator<MovieNavScreenList>()


//등록할 스크린 컴포넌트 import
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

export default function MovieNav(): JSX.Element{
    return(
        <Stack.Navigator>
            <Stack.Screen name= 'MovieList' component={MovieList}></Stack.Screen>
            <Stack.Screen name='MovieDetail' component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}

