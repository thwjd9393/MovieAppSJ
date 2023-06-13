import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

//영화 임포트
import BigCatalog from "./BigCatalog";


type Props = {
    url:string,

    onPress?: (id:string) => void
}

export default function BigCatalogList(props:Props):JSX.Element {

    //REST API를 이용하여 파싱한 영화데이터들 state변수
    const [movies,setMovies] = useState([])

    //영화리스트
    const loadData = ()=> {
        //전달받은 url 을 통해 json으로 인기 영화 정보를 읽어오기
        fetch(props.url)
            .then(response=>response.json())
            .then(json => setMovies(json.data.movies))
    }

    //화면이 처음 보여지거나 갱신될 때 자동 호출되는 Hook기술
    useEffect(()=>loadData())

    
    return(
        <View style={style.container}>

            {/* 1. 가장 상단 광고 viewpager부분 */}
            <FlatList
                horizontal={true} //스크롤 가로
                pagingEnabled = {true} //이 속성 쓰면 viewPager느낌 남
                data={movies}
                renderItem={(obj)=>{ //renderItem엔 object(서버에서 받아온 정보 가진) 가 온다
                    return <BigCatalog movie={obj.item} onPress={props.onPress}></BigCatalog>
                    // onPress가 필요한 곳은 BigCatalog이기 때문에 list에서 받아서 넘겨줌

                }}></FlatList>
        </View>
    )

}

const style = StyleSheet.create({

    container : {
        height : 300,

    },
})
