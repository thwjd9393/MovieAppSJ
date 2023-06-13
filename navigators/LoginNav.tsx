import React from "react";

//LoginNav의 Stack Navigator 객체 생성
import {createStackNavigator} from '@react-navigation/stack'

//이 로그인 네브에서 전환 할 화면 스크린들 type지정
import { LoginNavScreenList } from "../types";

const Stack = createStackNavigator<LoginNavScreenList>()

//네비게이터가 보여줄 화면 컴포넌트들 import
import SignUp from "../screen_login/SignUp";
import ResetPassWd from "../screen_login/ResetPassWd";
import Login from "../screen_login/Login";

export default function LoginNav() : JSX.Element{

    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
            <Stack.Screen name="ResetPassWd" component={ResetPassWd}></Stack.Screen>
        </Stack.Navigator>
    )

}

