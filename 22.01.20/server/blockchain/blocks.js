const fs = require('fs')
const merkle = require('merkle')
const cryptoJs = require('crypto-js')
const {Block, BlockHeader} = require("./blockclass")
const {getVersion, getCurrentTime} = require('../utils/isValidBlock')
const {createHash} = require('../utils/hash')
//////////////////////////////////////////////////////////
//block의 클라스를 정해주고 정의해줄거임
// const block = {
//     magicNumber : "0xD821E2",
//     BlockSize : "4mb",
//     header:{
//         //블록에대한 정보를 헤더에 담는다.
//         version : "1.0.0",
//         HashPrevBlock : 00000000, // 없으면 내가 최상의 노드(제네시스 코딩은 하드코딩으로 만드는 것)
//         timeStamp : "1970년 1월 1일", //유닉스 기준일 1970 1월 1일
//         HashMerkleRoot : "SHA256", // 암호화된 값이 들어감
//         bits:"작업증명 난이도 정하는",
//         Nonce: `넌스`  //임의로 생성되는 암호화 토큰으로 재생 공격을 방지하는데 사용
//     },
//     body : ["hello genesisBlockChain"]
// }
// console.log(block)
////////////////////////////////////////////////////////////////

//최초의 블록을 만들때 사용하는 함수
function createGenesisBlock(){
    const version = getVersion()//버전을 가져오는 함수
    const timestamp = getCurrentTime() //시간을 가져오는 함수
    const index = 0 //인덱스 번호를 매겨주는 함수
    const previousHash = '0'.repeat(64) // 해쉬값을 넣어주는 함수
    const body = ['hello block'] 
    const merkleTree = merkle('sha256').sync(body) // 바디안에 값을 해쉬값을 통해 변환시켜주는 함수
    const merkleRoot = merkleTree.root() || '0'.repeat(64)

    const header = new BlockHeader(version, index, previousHash, timestamp, merkleRoot)
    //해더안에 새로운블록해더 구조체안의 양식 버ㅈ
    return new Block(header,body)
}

//최초의 블럭을 BBLOCK이라고 선언
// const BBLOCK = createGenesisBlock()
// console.log('completed', BBLOCK)

let Blocks = [createGenesisBlock()]

addBlock(['hello1'])
addBlock(['hello2'])
addBlock(['hello3'])

//이함수는 단순히 push용도다 예를들어 하나씩 푸쉬되면 인덱스가 늘어나는 느낌
function addBlock(data){
    const newBlock = nextBlock(data);
    Blocks.push(newBlock)
}    


function getLastBlock() {
    return Blocks[Blocks. length - 1]
}

//다음 블럭의 header와 body를 만들어주는 함수
function nextBlock(data) {
    const prevBlock = getLastBlock() //이전블록에 마지막블록함수선언
    const version = getVersion() //버전을 얻기위한 버전함수선언
    const index = prevBlock.header.index + 1 // 인덱스에 해더안에있는 익덱스에 1씩더해줘야한다.
    const previousHash = createHash(prevBlock) // 이전블럭의 해쉬값을 해쉬함수를써서 한번더 암호화
    const timestamp = getCurrentTime() //타임스템프를 사용해서 만들어지는 시간을 확인
    const merkleTree = merkle('sha256').sync(data)//배열탑의함수를 변수로 생성
    const merkleRoot = merkleTree.root() || '0'.peat(64);//머클루트를 가져오고 예외처리했다?
    //다음블록안에 속해있는 새로운 블록해더를 선언 그안에 값으로는 위에 선언한 변수들 선언
    const newBlockHeader = new BlockHeader(version, index, previousHash, timestamp, merkleRoot);
    console.log(new Block(newBlockHeader,data))
    return new Block(newBlockHeader, data)

}


/*
블롴체인 개념 설명

 

- 네트워크 (http, socket..) 

- 분산원장 (데이터를 저장하는 코드) 

  - hash sha 256 -> JWT 

  - 단반향 암호화 ( 자리수는 고정되어 있다.) 

  - 머클 (Merkle) 

  - 작업증명 (pow) = 마이닝 

    Merkle 사용 이유 : 너무 많은 노드(블록)들을 찾기에 리소스의 낭비가 크고 효율성이 떨어짐 (완전탐색)
    -> merkle 사용으로 연결된 데이터 중 찾고자하는 데이터를 효율적으로 찾을 수 있음. 

*/