import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { MovieInfo } from "../types";

//1. 메인에서 받아올 데이터들 지정
//자료형 만들기 키워드 type
type Props = {
    title : string,
    url : string,
    onPress? : (id:string) => void | undefined 
}

export default function smallCatalogList(props : Props):JSX.Element {

    //2. 영화들의 정보를 가지는 state 변수
    //변수명과 그 변수 값을 바꾸는 메소드 함께 다님
    const [movies, setMovies] = useState<MovieInfo[]>([]) //무비 정보가 하나가 아닌 여러개라 배열로 만듦

    //3. 영화정보 받아오는 기능 메소드
    const loadData = () => {
        //전달 받은 url을 통해 json으로 인기 영화정보를 읽어오기
        fetch(props.url)
            .then(res => res.json() ) //응답 결과(res)를 json으로 파싱해줘 
            .then(json => setMovies(json.data.movies))

    }       

    //4. 화면이 처음 보여지거나 갱신될 때 자동 호출되는 Hook기술 메소드
    useEffect( ()=> loadData())

    return(
        <View style={style.container}>
            {/* 서브 타이틀 제목 표시 */}
            <Text style={style.title}>{props.title}</Text>

            {/* 5. 대량의 데이터 부르기 resycler view 대신하는 FlatList */}
            <FlatList
                horizontal={true}
                data={movies} //대량의 데이터
                // renderItem={( obj )=> { //리턴으로 obj 객체 하나 옴 : {item, index}
                //     return (
                //         <TouchableOpacity>
                //             <Image source={{uri : obj.item.large_cover_image}}></Image>
                //         </TouchableOpacity>
                //     ) 
                // }//아이템 모양
                renderItem={( {item,index} )=>{ //obj객체 : {item,index} //구조분해할당
                    return (
                        <TouchableOpacity activeOpacity={0.8} style={{paddingLeft:4, paddingRight:4}} onPress={()=> props.onPress!!(item.id)}>
                            <Image source={{uri:item.large_cover_image}} style={{width:140,height:200}}></Image>
                        </TouchableOpacity>
                    )
                }
            } 
            ></FlatList>

        </View>
    )

}

const style= StyleSheet.create({

    container : {
        flex :1,
        marginTop : 8,
        marginBottom : 8,
    },
    title : {
        padding : 8,
        fontSize : 16,
        fontWeight : 'bold',

    }

})