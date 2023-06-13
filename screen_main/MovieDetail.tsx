import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'


import { StackScreenProps } from '@react-navigation/stack'
import { MovieInfo, MovieNavScreenList } from '../types'
import BigCatalog from '../components_movie/BigCatalog'
type MovieDetailProp = StackScreenProps<MovieNavScreenList,'MovieDetail'>


export default function MovieDetail(props:MovieDetailProp):JSX.Element {

    //영화정보들을 저장할 변수
    const [movie, setMovie] = useState<MovieInfo>()

    //전달받은 id로 영화상세정보를 fetch하는 기능 메소드
    const loadData = () => {
        const {id} = props.route.params!! //구조분해 할당

        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
            .then(res=> res.json())
            .then(json => setMovie(json.data.movie))
    }

    useEffect(() => loadData())

    //fetch 데이터가 있는지 확인하여 없다면 로딩 화면이 보이도록
    return movie? (
        <ScrollView style={style.root}>
            {/* 1. 상세화면에 큰 이미지는 BigCatalog 재사용 */}
            <BigCatalog movie={movie}></BigCatalog>

            {/* 2. 영화 정보 출력 영역 */}
            <View>
                <Text style={style.title}>영화정보</Text>
                <View style={style.infoContainer}>
                    <Text>{movie.runtime}분</Text>
                    <Text>평점 : {movie.rating}</Text>
                    <Text>좋아요 : {movie.like_count}개</Text>
                </View>
            </View>

            {/* 3. 줄거리 출력 영역 */}
            <View>
                <Text style={style.title}>줄거리</Text>
                <Text style={style.description}>{movie.description_full}</Text>
            </View>

            {/* 4. 배우 캐스팅 정보 출력 */}


            {/* 5. 스크린 샛 이미지들 출력화면 */}


        </ScrollView>
    ) : (
        <View style={style.loadingContainer}> 
            <ActivityIndicator size='large' color='#E70915'></ActivityIndicator>
        </View>
    )
    
}

const style = StyleSheet.create({

    root : {
        flex :1,
        backgroundColor : '#FFFFFF',
    },
    loadingContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    title : {
        fontSize : 16,
        fontWeight : 'bold',
        paddingTop : 24,
        paddingRight : 16,
        paddingLeft : 16,
        paddingBottom : 8,
    },
    infoContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingLeft : 16,
        paddingRight : 16,
    },
    description : {
        paddingLeft : 16,
        paddingRight : 16,
        marginBottom : 16,
    }
})