//블록체인 관련해서 crypto 크립토 암호화를 도와주는 모듈 !!
// 몇가지 내장 모듈안에 들어잇는 메소드가 여러가지있는데 잘익혀두면 실제 서비스에서도
//적용할 수 있는 메리트 있는 녀석 암호화해주는 녀석 crypto(크립토)
//정보 DB에 저장 비번 1234가 노출되면 DB가 다 털리게 될 수 있다.
//암호화 방식도 계속 업데이트가 된다.

//생성자변수 선언
const crypto = require("crypto");

//console.log(crypto.createHash('sha512')) // update('변환할 값을 넣어라.') //  digest('인코딩할 녀석을 넣어준다.')
// PS C:\Users\KGA_16\Desktop\21.09.10\오전> node index1
// 29f7079e6a30921ee941be349d6479277b26f1a4fc2ace7ee2df48c9848ec1b70027b1e8111cb19e5d27abe5b2f130d7ac6be3e22dbcd6da29a59fe71623d2a5 = 안녕?이라는 값을 변환
//
console.log(crypto.createHash("sha512").update("안녕?").digest("hex"));

// KfcHnmowkh7pQb40nWR5J3sm8aT8Ks5+4t9IyYSOwbcAJ7HoERyxnl0nq+Wy8TDXrGvj4i281toppZ/nFiPSpQ==
//
console.log(crypto.createHash("sha512").update("안녕?").digest("base64"));
