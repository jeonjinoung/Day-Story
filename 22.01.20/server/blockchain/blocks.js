const fs = require('fs')
const merkle = require('merkle')
const cryptoJs = require('crypto-js')
const { type } = require('os')
const {Block, BlockHeader} = require("./blockclass")
const {getVersion, getCurrentTime} = require('../utils/isValidBlock')
const {createHash} = require('../utils/hash')
//////////////////////////////////////////////////////////


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


////////////////////////////////////////////////////////////////

//최초의 블럭을 BBLOCK이라고 선언
const BBLOCK = createGenesisBlock()
console.log('completed', BBLOCK)

function getLastBlock() {
    return Blocks[Blocks. length - 1]
}


//이함수는 단순히 push용도다 예를들어 하나씩 푸쉬되면 인덱스가 늘어나는 느낌
function addBlock(data){
    // new header 만들어서 => new block(header, body) 
    const newBlock = nextBlock(data);
    if(isValidNewBlock(newBlock, getLastBlock())){
        Blocks.push(newBlock)
        return true;
    }
    return false;
}    

function isValidType(block){
    return (
        typeof(block.header.version)=="string" &&     // string
        typeof(block.header.index)=="number" &&         // number
        typeof(block.header.previousHash)=="string" &&  // string
        typeof(block.header.timestamp)=="number" &&          // number 
        typeof(block.header.merkleRoot)=="string" &&    // string
        typeof(block.body)=="object"                 // object 
    )
}

function isValidNewBlock(currentBlock, previousBlock){
    // type검사 : 변수 안의 값이 String or Object or Number etc.등등인지 
    // 숫자가 들어가면 문제가 생김 // index가 number맞는지 
    if(!isValidType(currentBlock)){
        console.log(`inValidType(currentBlock)=false ${JSON.stringify(currentBlock)}`)
        return false;  // 함수 종료 
    }
    if(previousBlock.header.index +1 !== currentBlock.header.index){
        console.log(`invalid index입니다. `)
        return false;
    }
    if(createHash(previousBlock) !== currentBlock.header.previousHash){
        console.log(`invalid previousHash입니다.`);
        return false;
    }
    if(currentBlock.header.merkleRoot !== merkle('sha256').sync(currentBlock.body).root() || currentBlock.body.length === 0 ){
        console.log(`invalid body 입니다. (body 내용이 없거나 )`)
        return false;
    }

    return true;
}


function isValidBlocks(Blocks){
    
    // 1. 제네시스 블록 검사 - 유효한지, 데이터가 바뀐 적이 없는지 
    // 제네시스 블록은 하드코딩으로 만들어짐 

    // 아래 비교 대상 모두 return 값이 객체임
    // JS는 {} === {} => always FALSE !!! 
    // string으로 바꿔서 비교 ㄱㄱ 
    if(JSON.stringify(Blocks[0]) !== JSON.stringify(createGenesisBlock())){
        console.log(`Invalid Genesis block입니다. `)
        return false;
    }

    // 2. 배열 요소 하나하나 검사 
    // Blocks[0] = 이미 검증이 위에서 끝난 제네시스 블록 
    let tempBlocks = [Blocks[0]]
    // 첫 번째 (제네시스) 블록을 빼고 for문 돌리기 
    for(let i=1; i<Blocks.length; i++){
        if(isValidNewBlock(Blocks[i], tempBlocks[i-1])){
            tempBlocks.push(Blocks[i]);
        }else{
            return false;
        }
    }

    return true;
}
 

let Blocks = [createGenesisBlock()]

console.log(444444444444444)
addBlock(['hello1'])
addBlock(['hello2'])
console.log(444444444444444)


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