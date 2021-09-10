//노드는 웹브라우저에서 자바스크립트 보다 더 많은기능을 한다.
//노드는 요청에대한 정보도 가져올 수 있다.
//pase 모듈

//매장 모듈
const path = require("path");
const { parse } = require("path");
//const str = __filename 현재파일나온다.
//const str = __dirname

const url = require("url");
const { URL } = url;

const str = __filename;

// //path라는 모듈은 폴더랑 조작하기 쉽게하기 위해 ...
// //웹이랑 운영체제 경로가 틀리다
// //부분자가 나와준다??...별거아니다??
// //console.log(path.sep); -> /값이 출력네 나온다.
// console.log(path.sep);
// //console.log(path.delimiter);(환경변수의 부분자) -> ; 세미콜론이 나온다.
// console.log(path.delimiter);
// // console.log(path.dirname(str)); 현재 폴더의 경로가 나온다.
// console.log(path.dirname(str));
// // console.log(path.parse(str)); root dir base ext name 값이 어떻게 나오는지 보여준다.
// console.log(path.parse(str));
// //console.log(path.basename(str)); base 네임이 index.js라는 값이 나온다는것을 보여준다.
// console.log(path.basename(str));

//url => URL {
//   href: 'https://comic.naver.com/webtoon/detail?titleId=768470&no=4&weekday=',
//   origin: 'https://comic.naver.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'comic.naver.com',
//   hostname: 'comic.naver.com',
//   port: '',
//   pathname: '/webtoon/detail',
//   search: '?titleId=768470&no=4&weekday=', !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!보면된다.
//   searchParams: URLSearchParams { 'titleId' => '768470', 'no' => '4', 'weekday' => '' }, !!!!!!!!!!!!!!!!!!!!!!!!보면된다.
//   hash: ''
// } 라는 값이 나오는데 URL 모듈안에 url 생성자가 있다.
// 주소를 넣어서 인스턴스를 생성했더니 주소가 쫘라락 주소체계 별로 나온다.
// WHATWG => 주소체계 굳이 다 볼 필요는 없다.

const kyungil = new URL("https://comic.naver.com/bestChallenge/detail?titleId=769614&no=29");

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'comic.naver.com',
//     port: null,
//     hostname: 'comic.naver.com',
//     hash: null,
//     search: '?titleId=768470&no=4&weekday=',
//     query: 'titleId=768470&no=4&weekday=',
//     pathname: '/webtoon/detail',
//     path: '/webtoon/detail?titleId=768470&no=4&weekday=',
//     href: 'https://comic.naver.com/webtoon/detail?titleId=768470&no=4&weekday='
//   }

// // username password 빠져있다. //searchParams(대신해서 path)
// const parseUrl = url.parse("https://comic.naver.com/bestChallenge/detail?titleId=769614&no=29");

// // console.log(a);

// // console.log(parseUrl);

// // PS C:\Users\KGA_16\Desktop\21.09.10\오전> node index
// // https://comic.naver.com/bestChallenge/detail?titleId=769614&no=29
// // 주소 포멧

// console.log(url.format(parseUrl));

// console.log(kyungil.searchParams);
// // console.log(kyungil.searchParams.getAll("tname"));

// // console.log(kyungil.searchParams.has("mode")); //해당하는 mode가없기 때문에
// false값이 나온다.
console.log(kyungil.searchParams.has("mode"));

const queryUrl = url.parse("https://comic.naver.com/bestChallenge/detail?titleId=769614&no=29");

const query = queryString.parse(queryUrl.query);

console.log(query);

console.log(queryString.stringify(query));
