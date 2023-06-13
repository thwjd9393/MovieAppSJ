import React, {useState} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

//공통 사용 컴포넌트 임포트
import TabComponent from '../components/tabComponent'
import InputComponent from '../components/inputComponent'

// 네비게이션이터에서 네비게이션 받아오기 위한 작업
import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types' //어떤 화면인데?

type SignUpProps = StackScreenProps<LoginNavScreenList ,"SignUp"> //타입지정

export default function SignUp(props : SignUpProps) : JSX.Element { //props 객체 {navigation, route}

    // //우선 테스트 목적 화면
    // return (

    //     <View style={style.root}>
    //         <Text>SignUp</Text>
    //     </View>

    // )

    // tab 작업에서 사용할 state 변수 생성
    const [tabs, setTabs] = useState(['전화번호', '이메일']) //탭 라벨을 string배열로 만들기
    const [tabIndex, setTabIndex] = useState(0) //현재 선택된 탭 번호


    // 완료 버튼 클릭 시 실행하는 메소드
    const Signup = () => {
        // 원래는 서버에 정보 보내는 작업 코드 작성///

        //전송작업 끝나면 회원가입화면 종료 및 이전 로그인화면으로 이동
        props.navigation.goBack()
    }

    return (
        <View style={style.root}>
            {/* Content, footer영역으로 구성 */}
            <View style={style.content}>

                {/* 1.1 전화번호와 이메일 중 원하는 정보로 회원가입할 수 있도록 탭으로 구성 */}
                <View style={style.tabContainer}>
                    {/* 탭 텀포넌트는 RN에 없음.. 그래서 Custom component로 제작 */}
                    {/* <TabComponent label='전화번호' selected={true}></TabComponent>
                    <TabComponent label='이메일' selected={false}></TabComponent> */}

                    {/* 탭 라벨의 개수만큼 탭 컴포넌트를 만들기 위해 map() 메소드 이용 */}

                    {
                        tabs.map( (value, index)=>{
                            return <TabComponent 
                                label={value} 
                                key={index}
                                selected = { index == tabIndex }
                                onPress= {()=>setTabIndex(index)}
                                ></TabComponent>
                        } )
                    }

                </View>

                {/* 1.2 정보 입력 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 1.3 이메일 탭일때는 비밀번호 입력 컴포넌트가 추가로 존재 해야됨 */}
                {
                    //if(tabIndex == 1){} //JSX {}안에서는 if문법 불가능 연산자는 가능
                    
                    // && (논리 연산자) = 앞 조건이 false면 뒤 조건 안봄
                    // & (비트 연산자) = 앞 조건이 false여도 뒤도 쳐다봄

                    //논리연산자의 특징을 이용하여 처리 앞 조건 값이 true일 때만 뒤 실행문이 실행됨
                    tabIndex == 1 && <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                }

                {/* 1.4 전화번호 탭일 때는 [다음] 버튼 */}
                {
                    tabIndex === 0 && <View style={{width:'100%', margin : 16,}}><Button title='다음' onPress={()=>setTabIndex(1)}></Button></View>
                }

                {/* 1.5 이메일 탭일 때 [완료] 버튼 */}
                {
                    tabIndex === 1 && <View style={{width:'100%', margin : 16,}}><Button title='완료' onPress={()=>Signup()}></Button></View>
                }

                {/* 1.6 전화번호 탭일 때 입력에 대한 이유를 안내하는 메세지 표시 */}
                {
                    tabIndex === 0 && <Text style={style.telMsg}>Movie APP의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신 취소 가능합니다</Text>
                }

            </View>


            <View style={style.footer}>
                <Text style={style.footerMsg}>이미 계정이 있으신가요? <Text style={style.footerGoBack} onPress={()=>props.navigation.goBack()}>로그인</Text></Text>
            </View>

        </View>
    )

}

const style = StyleSheet.create({

    root : {
        flex :1,
        backgroundColor : '#FEFFFF'
    },
    content : {
        flex :1,
        alignItems : 'center',
        padding : 32,
    },
    telMsg : {
        textAlign : 'center',
        fontSize : 12,
        color : '#929292',
        marginLeft :8,
        marginRight : 8,
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
    tabContainer : {
        flexDirection : 'row',
        marginBottom : 16,
    }
})