import React, {useState} from 'react'
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native'


//공통사용 컴포넌트 임포트
import TabComponent from '../components/tabComponent'
import InputComponent from '../components/inputComponent'


// 네비게이션이터에서 네비게이션 받아오기 위한 작업
import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types' //어떤 화면인데?

type ResetPassWdProps = StackScreenProps<LoginNavScreenList ,"ResetPassWd"> //타입지정

export default function ResetPassWd(props : ResetPassWdProps) : JSX.Element { //props 객체 {navigation, route}

    //우선 테스트 목적 화면
    // return (

    //     <View style={style.root}>
    //         <Text>ResetPassWd</Text>
    //     </View>

    // )

    // 탭에 따른 화면 구성을 위한 state 변수들
    const [tabs, setTabs] = useState<string[]>(['이메일', '전화번호']) //탭이름
    const [tabIndex, setTabIndex] = useState<number>(0) //현재 탭 번호

    //탭 선택에 따른 안내 메세지 
    const message = [
        '이메일을 입력하면 임시 비밀번호를 보내드립니다',
        '전화번호를 입력하면 임시 비밀번호를 보내드립니다',
    ]

    //2. 비밀번호 재설정 화면
    return (
        <View style={style.root}>
            {/* 1. 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 1.1 자물쇠 모양의 이미지 표시 영역 */}
                <View style={style.lockImgcontainer}>
                    <Image source={require('../Images/lock.png')}></Image>
                </View>

                {/* 1.2 타이틀 안내문구 표시 */}
                <Text style={style.title}>로그인에 문제가 있나요</Text>

                {/* 1.3 이메일 또는 전화번호 탭 선택에 대한 안내문구 */}
                <Text style={style.msg}> {message[tabIndex]} </Text>

                {/* 1.4 탭 만들기 - 공통 컴포넌트 사용하여 */}
                <View style={style.tabContainer}>
                    {
                        tabs.map( (value, index) => {
                            return <TabComponent label={tabs[index]} selected={index==tabIndex} onPress={()=>setTabIndex(index)} key={index}></TabComponent>
                        })
                    }
                </View>

                {/* 1.5 정보 입력 박스 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 1.6 전송 버튼 */}
                <View style={{width:'100%', margin:16}}>
                    <Button title='전송' onPress={()=> Alert.alert('임시비밀 번호 발송', '로그인 후 정보수정을 통해 안전한 비밀번호로 변경 하세요') }></Button>
                </View>

            </View>

            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerMsg}>로그인 화면으로 돌아가기 <Text style={style.footerGoBack} onPress={()=>props.navigation.goBack()}>클릭</Text></Text>
            </View>
        </View>
    )

}

const style = StyleSheet.create({

    root : {
        flex :1,
        padding:16,
        backgroundColor : '#FEFFFF'
    },
    content : {
        flex : 1,
        width : '100%',
        alignItems : 'center',
        padding : 16,
    },
    lockImgcontainer : {
        padding : 24,
        borderWidth : 2,
        borderColor : '#292929',
        borderRadius : 100,
    },
    title : {
        fontSize : 16,
        marginBottom : 16,
        marginTop : 16,
    },
    msg : {
        textAlign : 'center',
        marginBottom : 14,
        color : '#292929',
    },
    tabContainer : {
        flexDirection : 'row',
        marginBottom : 16,
    },
    footer : {
        borderTopWidth : 1,
        borderTopColor : '#D3D3D3',
        padding : 8,
    },
    footerMsg : {
        textAlign : 'center',
        color : '#929292',
    },
    footerGoBack : {
        color : '#3796EF',
    },
})