// 앱 제작의 주요 작업 순서
// 0) react navigation과 AsysncStorage 라이브러리 추가
// 1) Main.tsx에 최상위 네비게이터 배치
// 2) Intro 화면 컴포넌트 제작
// 3) login 관련 3개 화면 컴포넌트 제작 [screen_login 폴더]
// 4) Main화면 관련 4개 컴포넌트 제작 [screen_main 폴더]

////////////////////////////////////////////////////////////////

//1. 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// 2.
// 타입 스크립트에서는 네비게이터에 지정할 스크린 화면 리스트 타입을 미리 만들어야함
// types.tsx 파일을 만들어 관리 할 것, 필요한 곳에서 임포트 해서 사용하기
// 한 곳에 모아 보기 편리하게 하기 위해
import { RootScreenList } from "./types";

// 3. 앱 전체 화면들을 전환 할 수 있는 최 상위 stack navigtor 객체 생성 & 타입 지정
const rootStack = createStackNavigator<RootScreenList>()

// 4. 최상위 네비게이터에 의해 전환될 페이지(screen or navigator) 사용하기 위한 임포트
import Intro from "./Intro";
import LoginNav from "./navigators/LoginNav";
import MainNav from "./navigators/MainNav";

//네비게이션 콘테이너를 가진 최상위 root 컴포넌트 제작 - 앱의 시작 컴포넌트(index.js에서 설정)
export default function Main() : JSX.Element {

    return (
        <NavigationContainer>

            <rootStack.Navigator screenOptions={{headerShown : false}}>
                <rootStack.Screen name="Intro" component={Intro}></rootStack.Screen>
                <rootStack.Screen name="LoginNav" component={LoginNav}></rootStack.Screen>
                <rootStack.Screen name="MainNav" component={MainNav}></rootStack.Screen>
            </rootStack.Navigator>

        </NavigationContainer>
    )

}
