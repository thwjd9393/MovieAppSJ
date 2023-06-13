import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'



//props type [TextInput 컴포넌트의 각 속성들을 전달받기 위한 타입]
type Props = {
    placeholder : string | undefined,
    secureTextEntry? : boolean | undefined, //nullable로 만들어서 꼭 안써도 되게 함
    onChangeText? : (text:string)=>void | undefined
}

export default function inputComponent(props : Props):JSX.Element{
    return (
        <View style={style.container}>
            <TextInput 
                placeholder={props.placeholder}  //컴포넌트를 사용하는 곳에서 힌트에 대한 property를 전달받아야한다
                secureTextEntry = {props.secureTextEntry} //텍스트 시큐어 기능
                onChangeText={props.onChangeText} //글씨 바뀔때마다 반응하는 넘
                placeholderTextColor='#C3C2C8'
                style={style.input}></TextInput>
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        width:'100%',
        height: 40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1,   //TextInput의 높이를 container높이 40에 맞게
        color: '#292929',
    },
})