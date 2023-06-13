import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// type 타입만드는 또 다른 방법
interface Props{
    label:string,
    selected?: boolean | undefined,
    onPress?: ()=>void | undefined,
}

export default function tabComponent(props:Props):JSX.Element{

    //탭의 선택여부에 따라 글씨색상 달라야 함
    let color= props.selected? '#292929' : '#929292'

    //탭의 선택여부에 따라 아래경계선의 색상도 변경
    style.container.borderBottomColor= color
    
    return (
        // 탭 터치에 따른 처리 메소드를 지정하기위해
        <TouchableOpacity style={style.container} onPress={props.onPress}>
            {/* 탭에 보여질 글씨는 props로 전달받기 */}
            <Text style={{color:color}}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
    container:{
        flex:1, //탭이 놓여질때 다른 탭과의 flex값을 같게 하여 가로 너비를 균등하게 하기 위함
        borderBottomWidth:2,
        borderBottomColor:'#929292',
        paddingBottom:8,
        alignItems:'center',
        justifyContent:'center',
    }
})