import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'
import { MovieInfo } from '../types'


type Props = {
    movie : MovieInfo, //타입 지정하기 위해 데이타클래스 필요
    onPress? : (id:string)=>void | undefined, //함수를 받을 거야 -> 디테일 페이지로 이동하기 위한 클릭 이벤트
}

export default function BigCatalog(props : Props): JSX.Element {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress!!(props.movie.id)}>
            <Image 
                //화면의 가로 사이즈를 얻어와서 이미지의 가로 사이즈로 지정 : Dimensions.get('window')
                style={{width : Dimensions.get('window').width, height : 300}}
                source={{uri: props.movie.large_cover_image}}></Image>
            {/* 영화의 제목 , 개봉일, 장르 등의 정보를 보여주기 */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    <Text style={style.labelGenres}>{props.movie.genres.join(' | ')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
    infoContainer:{
        position:'absolute',
        bottom:0,
        width:'100%',
        alignItems:'flex-start',
    },
    labelYear:{
        color:'#FFFFFF',
        padding:8,
        fontWeight:'bold',
        marginLeft:4,
        backgroundColor:'#E70915',
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        padding:8,
        opacity: 0.8,
    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FFFFFF',
        padding:8,
    },
    labelGenres:{
        fontSize:12,
        color:'#FFFFFF',
        padding:8,
    }
})