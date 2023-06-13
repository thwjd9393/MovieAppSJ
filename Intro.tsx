import React from "react";
import { View, Text, StyleSheet, Button, ActivityIndicator } from "react-native";
// ActivityIndicator - 화면지시자 , 빙빙 도는 모양, 프로그레스바
import AsyncStorage from '@react-native-async-storage/async-storage'

// 2. Stack Navigator의 screen으로 등록된 컴포넌트에서 전달받은 props의 타입 지정
import { StackScreenProps } from "@react-navigation/stack"
import { RootScreenList } from "./types"; 

//그냥 Props만 임포트 하면 안되고 이 프로프가 스택에 연결된 3 화면중 누구것인지 명시해야함!!!
type IntroProps = StackScreenProps<RootScreenList , 'Intro'>  

//function component
// 1. 네비게이션에 등록하면 파라미터로 props {navigation, route} 객체 받음
export default function Intro(props : IntroProps):JSX.Element {

    // 3. 로그인한 적이 있는지 검사한 후 결과에 따라 로그인 Nav 또는 메인 Nav로 이동
    AsyncStorage.getItem('email').then((value)=>{
        if(value) props.navigation.replace('MainNav') //replace는 현재 화면 스택에 안 쌓고 감
        else props.navigation.replace('LoginNav')
    })

    return (
        // 화면 전환 테스트 목록으로 보여질 임시 화면 제작
        // <View style={style.root}>
            
        //     <Text >인트로</Text>
        //     <Button title="로그인 페이지 이동" 
        //         onPress={()=>props.navigation.navigate("LoginNav")}></Button>
        //     <Button title="메인 페이지 이동"
        //         onPress={()=>props.navigation.navigate("MainNav")}></Button>
        // </View>

        // 4. AsyncStorage가 비동기 방식으로 읽어오는 사이에 잠깐 보여질 수 있는 로딩 화면
        <View style={style.root}>
            <ActivityIndicator></ActivityIndicator>
        </View>
        
    )

}


const style = StyleSheet.create({

    root : {
        padding : 16,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }

})