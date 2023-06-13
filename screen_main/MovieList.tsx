import React, {useEffect} from 'react'
import { ScrollView, Text, StyleSheet, Button, TouchableOpacity, Image, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

//내가 만든 컴포넌트 임포트
import BigCatalogList from '../components_movie/BigCatalogList'
import SmallCatalogList from '../components_movie/smallCatalogList'


import { StackScreenProps } from '@react-navigation/stack'
import { MovieNavScreenList } from '../types'
type MovieListProp = StackScreenProps<MovieNavScreenList, 'MovieList'>


export default function MovieList(props:MovieListProp):JSX.Element {

    //헤더 모양 설정 - rander() 메소드로 UI완료 된 후 설정 가능함
    //리턴 다음해 해야됨
    //화면이 그려진 후 발동하는 라이프사이클 메소드 효과를 주는 Hooks 기술
    // useState() , useEffect()

    const setHeader = () => {
        props.navigation.setOptions({
            headerTitleAlign : 'center',
            headerRight : () => (
                <TouchableOpacity style={{marginRight:16}} onPress={()=>Alert.alert('매뉴')}>
                    <Image source={require('../Images/ic_dot_menu.png')}></Image>
                </TouchableOpacity>
            ),
            headerLeft : () => (
                <TouchableOpacity style={{flexDirection : 'row' ,marginLeft:16, alignItems:'center'}} 
                    onPress={async ()=>{
                        await AsyncStorage.removeItem('email') //얘 비동기 작업임
                        props.navigation.replace('Intro') //await-async로 동기 맞춰줘야함
                    }}>
                    <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
                    <Text style={{marginLeft:4}}>로그아웃</Text>
                </TouchableOpacity>
            )
        })
    }

    useEffect(()=> setHeader()) //useEffect에 의해 UI 작업 후 setHeader() 발동
    


    //인기 영화 정보 불러오는 url [get방식]
    const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

    // 최신등록순 영화 정보 불러오는 url 
    const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
    
    // 평점순 영화 정보 불러오는 url 
    const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
    
    // 다운로드순 영화 정보 불러오는 url 
    const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";
 

    return (
        <ScrollView style={style.root}>
            {/* 큰 이미지로 가장 높은 선호도를 가진 가로 스크롤(페이징)로 보여주기 */}
            {/* 이 작업을 별도의 컴포넌트를 만들어서 제작하면 코드가 분리되어 유지보수가 용이함 */}
            <BigCatalogList url={bigUrl}
                onPress={(id)=>props.navigation.navigate('MovieDetail', {id})}
            ></BigCatalogList>


            {/* 세 종류의 영화 목록이 모두 같은 디자인을 가짐 별도의 컴포넌트 만들어서 재사용 */}
            {/* 최신 등록 순 */}
            <SmallCatalogList 
                title='최신등록순'
                url={recentUrl}

                // onPress={(id)=>props.navigation.navigate('MovieDetail', {'id':id})} //식별자와 변수이름 같으면 생략 가능
                onPress={(id)=>props.navigation.navigate('MovieDetail', {id})} //식별자와 변수이름 같으면 생략 가능
            ></SmallCatalogList>

            {/* 평점순 */}
            <SmallCatalogList 
                title='평점순'
                url={ratingtUrl}

                onPress={(id)=>props.navigation.navigate('MovieDetail', {'id':id})}
            ></SmallCatalogList>

            {/* 다운로드순 */}
            <SmallCatalogList 
                title='다운로드순'
                url={downloadUrl}

                onPress={(id)=>props.navigation.navigate('MovieDetail', {'id':id})}
            ></SmallCatalogList>


        </ScrollView>
    )
}


const style = StyleSheet.create({

    root : {
        flex :1,
        backgroundColor : '#FEFFFF'
    },
    
})