
//1. 최상위 스택 네비게이터의 화면 리스트 타입 지정
export type RootScreenList = {
    Intro : undefined,
    LoginNav : undefined,
    MainNav : undefined, //undefined = putExtra
}


// 2. LoginNav Stack Navigator 화면 리스트 지정
export type LoginNavScreenList = {
    Login : undefined,
    SignUp : undefined,
    ResetPassWd : undefined,

    //메인 Nav화면으로 전환할 수 있도록 등록
    MainNav : undefined,
}


// 3. MainNav BottomTabnavigator 화면 리스트 타입
export type MainNavScreenList = {
    MovieNav : undefined,
    Favorite : undefined,
    Community : undefined,
}


//4. MovieNav Stack Navigator 화면 리스트 지정
export type MovieNavScreenList = {
    MovieList : undefined, 

    MovieDetail : undefined | {id:string}, //디테일 페이지로 id 넘겨주기 위해 putExtra 추가

    //로그 아웃시에 Intro화면으로 이동하기 위해 리스트 등록 추가
    Intro : undefined
}


// 빅카탈로그용
// 영화 1개의 정보 타입 중 필요한 정보 받음
export interface MovieInfo {
    id : string,
    title : string,
    year : string,
    genres : string[],
    large_cover_image : string,

    //영화 상세정보에서 필요한 속성 key 추가
    runtime : string,
    rating : string,
    like_count : string,
    description_full : string,
}
