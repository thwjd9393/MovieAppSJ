import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

//공통으로 사용하는 컴포넌트 improt
import InputComponent from '../components/inputComponent'


// 네비게이션이터에서 네비게이션 받아오기 위한 작업
import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types' //어떤 화면인데?

type LoginProps= StackScreenProps<LoginNavScreenList,'Login'> //타입지정

export default function Login(props : LoginProps) : JSX.Element { //props 객체 {navigation, route}

    //우선 테스트 목적 화면
    // return (

    //     <View style={style.root}>
    //         <Text>로그인</Text>
    //     </View>

    // )

    //이메일 입력 값을 저장하는 변수
    let email = ''

    //인풋 컴포넌트의 클씨가 변경될 때 마다 발동하는 함수
    const changeText = (s : string) => {email = s}

    //로그린 버튼 클릭 시 실행 될 함수
    //async-await문법을 통해 비동기 작업을 동기처리되도록 한다
    const login = async() => {
        //원래는 서버에 전성하여 db에 저장 해야됨

        // 디바이스 저장소에 이메일 정보를 저장하여 다시 앱을 시작 할 때 로그인을 재차 물러어보지 않도록
        await AsyncStorage.setItem('email', email)

        //로그인 완료 되었으니 main화면으로 전환
        props.navigation.replace('MainNav')

    }

    return (

        <View style={style.root}>
            {/* 두 영역으로 구성 : 로그인 콘텐츠 영역, 아래쪽에 회사 or 앱 이름 표시 영역 */}
            <View style={style.content}>
                {/* 1.1 로고 */}
                <Text style={style.logo}>Movie</Text>

                {/* 1.2 이메일과 비밀번호 입력 박스 제작 */}
                {/* 자주쓰는 컴포넌트를 따로 빼서 제작 - 재사용을 위해 */}
                {/* TextInput은 로그인,회원가입, 비밀번호 재설정 화면에서도 모두 사용
                    사용빈도가 높아, 이를 일일이 스타일 하기 번거로우니 별도의 CustomCoponent로 제작하여 재사용
                */}
                <InputComponent placeholder='이메일' onChangeText={changeText}></InputComponent> 
                <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                {/* 내가 만드는 속성 (placeholder) */}

                {/* 1.3 비밀번호 재설정 */}
                <Text style={style.resetPW} onPress={()=>props.navigation.navigate('ResetPassWd')}>비밀번호 재설정</Text>

                {/* 1.4 로그인 버튼 만들기 */}
                <View style={{width : '100%', marginBottom : 24}}>
                    <Button title='login' onPress={login}></Button>
                </View>

                {/* 1.5 회원가입 안내 글씨 */}
                <Text style={style.singup}>계정이 없으신가요? 
                    <Text style={style.singupLink} onPress={()=>props.navigation.navigate('SignUp')}> 가입하기</Text>
                </Text>

            </View>

            <View style={style.footer}>
                <Text style={style.footercopyright}>Movie info app by SJ</Text>
            </View>
        </View>

    )

}

const style = StyleSheet.create({

    root : {
        flex :1,
        backgroundColor : 'FEFFFF'
    },
    content : {
        flex :1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 32,
    },
    footer : {
        borderTopWidth : 1,
        borderTopColor : '#D3D3D3',
        padding : 8,
    },
    logo : {
        color :'#292929',
        fontSize : 40,
        fontWeight : 'bold',
        marginBottom : 32,
    },
    resetPW : {
        width : '100%',
        color : '#3796EF',
        textAlign : 'right',
        marginTop : 8,
        marginBottom : 16,
        marginRight : 8,
    },
    singup : {
        color : '#929292',

    },
    singupLink : {
        color : '#3796EF',
    },
    footercopyright : {
        textAlign : 'center',
        padding : 8,
    }

})